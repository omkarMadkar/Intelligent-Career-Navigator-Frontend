"use client"

import { useState, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { 
  Upload, 
  Download, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Info, 
  TrendingUp, 
  FileText,
  Loader2,
  X,
  RefreshCw,
  Star,
  Target,
  Award,
  Lightbulb
} from "lucide-react"
import { useDropzone } from "react-dropzone"

// Types for resume analysis
interface ResumeAnalysis {
  id: string
  fileName: string
  uploadDate: string
  overallScore: number
  readinessScore: number
  feedback: {
    strengths: FeedbackItem[]
    warnings: FeedbackItem[]
    critical: FeedbackItem[]
    suggestions: FeedbackItem[]
  }
  sections: {
    contact: SectionScore
    summary: SectionScore
    experience: SectionScore
    education: SectionScore
    skills: SectionScore
    formatting: SectionScore
  }
  keywords: {
    found: string[]
    missing: string[]
    industry: string
  }
  atsCompatibility: {
    score: number
    issues: string[]
  }
  suggestions: string[]
}

interface FeedbackItem {
  id: string
  category: string
  type: "good" | "warning" | "critical" | "suggestion"
  message: string
  priority: "high" | "medium" | "low"
  impact: number
}

interface SectionScore {
  score: number
  feedback: string[]
  suggestions: string[]
}

// Real API function for resume analysis
const analyzeResume = async (file: File): Promise<ResumeAnalysis> => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('industry', 'Software Development') // You can make this dynamic
  
  const response = await fetch('/api/resume-analysis', {
    method: 'POST',
    body: formData
  })
  
  if (!response.ok) {
    throw new Error('Failed to analyze resume')
  }
  
  const result = await response.json()
  
  if (!result.success) {
    throw new Error(result.error || 'Analysis failed')
  }
  
  return result.data
}

export default function ResumeAnalysisPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      setUploadedFile(file)
      setError(null)
      handleAnalyze(file)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: false,
    maxSize: 5 * 1024 * 1024 // 5MB
  })

  const handleAnalyze = async (file: File) => {
    setIsAnalyzing(true)
    setError(null)
    
    try {
      const result = await analyzeResume(file)
      setAnalysis(result)
    } catch (err) {
      setError("Failed to analyze resume. Please try again.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleRetry = () => {
    if (uploadedFile) {
      handleAnalyze(uploadedFile)
    }
  }

  const getStatusIcon = (type: string) => {
    switch (type) {
      case "good":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "critical":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "suggestion":
        return <Info className="h-4 w-4 text-blue-500" />
      default:
        return <Info className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (type: string) => {
    switch (type) {
      case "good":
        return "bg-green-50 text-green-700 border-green-200"
      case "warning":
        return "bg-yellow-50 text-yellow-700 border-yellow-200"
      case "critical":
        return "bg-red-50 text-red-700 border-red-200"
      case "suggestion":
        return "bg-blue-50 text-blue-700 border-blue-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const renderFeedbackItems = (items: FeedbackItem[]) => (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className={`p-3 rounded-lg border ${getStatusColor(item.type)}`}
        >
          <div className="flex items-start gap-3">
            {getStatusIcon(item.type)}
            <div className="flex-1">
              <h4 className="font-medium text-sm">{item.category}</h4>
              <p className="text-sm mt-1">{item.message}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="text-xs">
                  Impact: {item.impact}/10
                </Badge>
                <Badge variant="outline" className="text-xs capitalize">
                  {item.priority}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume Analysis</h1>
          <p className="text-gray-600">
            Upload your resume for AI-powered analysis and get detailed feedback to improve your chances of landing interviews.
          </p>
        </div>

        {!analysis && !isAnalyzing && (
          <Card className="border border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Upload Your Resume
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                {isDragActive ? (
                  <p className="text-lg font-medium text-blue-600">Drop your resume here...</p>
                ) : (
                  <div>
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      Drag & drop your resume here, or click to browse
                    </p>
                    <p className="text-sm text-gray-500">
                      Supports PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
                )}
              </div>
              
              {error && (
                <Alert className="mt-4 border-red-200 bg-red-50">
                  <XCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        )}

        {isAnalyzing && (
          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-8 text-center">
              <Loader2 className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-spin" />
              <h3 className="text-xl font-semibold mb-2">Analyzing Your Resume...</h3>
              <p className="text-gray-600 mb-6">
                Our AI is reviewing your resume for content, formatting, and ATS compatibility.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Extracting content and structure</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                  <span>Analyzing keywords and skills</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                  <span>Checking ATS compatibility</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                  <span>Generating personalized feedback</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {analysis && (
          <div className="space-y-6">
            {/* Overall Score Card */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Analysis Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysis.overallScore)}`}>
                      {analysis.overallScore}/100
                    </div>
                    <p className="text-sm text-gray-600">Overall Score</p>
                    <div className="mt-2">
                      <Progress value={analysis.overallScore} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysis.readinessScore)}`}>
                      {analysis.readinessScore}%
                    </div>
                    <p className="text-sm text-gray-600">Interview Readiness</p>
                    <div className="mt-2">
                      <Progress value={analysis.readinessScore} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysis.atsCompatibility.score)}`}>
                      {analysis.atsCompatibility.score}/100
                    </div>
                    <p className="text-sm text-gray-600">ATS Compatibility</p>
                    <div className="mt-2">
                      <Progress value={analysis.atsCompatibility.score} className="h-2" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{analysis.fileName}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" onClick={handleRetry}>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Re-analyze
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Analysis Tabs */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle>Detailed Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="feedback" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="feedback">Feedback</TabsTrigger>
                    <TabsTrigger value="sections">Sections</TabsTrigger>
                    <TabsTrigger value="keywords">Keywords</TabsTrigger>
                    <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                  </TabsList>

                  <TabsContent value="feedback" className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Strengths ({analysis.feedback.strengths.length})
                        </h3>
                        {renderFeedbackItems(analysis.feedback.strengths)}
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          Areas for Improvement ({analysis.feedback.warnings.length + analysis.feedback.critical.length})
                        </h3>
                        {renderFeedbackItems([...analysis.feedback.warnings, ...analysis.feedback.critical])}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="sections" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(analysis.sections).map(([section, data]) => (
                        <Card key={section} className="border border-gray-200">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-medium capitalize">{section}</h4>
                              <div className={`text-lg font-bold ${getScoreColor(data.score)}`}>
                                {data.score}/100
                              </div>
                            </div>
                            <Progress value={data.score} className="h-2 mb-3" />
                            <div className="space-y-2">
                              {data.feedback.map((item, index) => (
                                <div key={index} className="text-xs text-gray-600 flex items-center gap-1">
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                  {item}
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="keywords" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border border-gray-200">
                        <CardHeader>
                          <CardTitle className="text-lg">Found Keywords</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {analysis.keywords.found.map((keyword) => (
                              <Badge key={keyword} variant="secondary" className="bg-green-100 text-green-700">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-gray-200">
                        <CardHeader>
                          <CardTitle className="text-lg">Missing Keywords</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {analysis.keywords.missing.map((keyword) => (
                              <Badge key={keyword} variant="outline" className="border-red-200 text-red-700">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 mt-3">
                            Industry: <span className="font-medium">{analysis.keywords.industry}</span>
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="suggestions" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-yellow-500" />
                        Actionable Suggestions
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {analysis.suggestions.map((suggestion, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                            <Award className="h-4 w-4 text-blue-600 mt-0.5" />
                            <p className="text-sm text-blue-900">{suggestion}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
