"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Upload, Download, Eye, CheckCircle, AlertTriangle, XCircle, Info, TrendingUp, FileText } from "lucide-react"

// Mock feedback data matching the design
const feedbackData = {
  strengths: [
    { id: 1, category: "Strong Action Verbs", type: "good", message: "Excellent use of action verbs throughout" },
    { id: 2, category: "Clean Layout", type: "good", message: "Professional formatting and structure" },
    { id: 3, category: "ATS Compatible", type: "good", message: "Resume is ATS-friendly" },
    { id: 4, category: "Good Keywords", type: "good", message: "Strong keyword optimization" },
    { id: 5, category: "Contact Info Complete", type: "good", message: "All contact information present" },
    { id: 6, category: "Education Clear", type: "good", message: "Education section well-structured" },
    { id: 7, category: "Skills Relevant", type: "good", message: "Technical skills are relevant" },
    { id: 8, category: "Experience Well-Structured", type: "good", message: "Work experience clearly presented" },
  ],
  warnings: [
    { id: 9, category: "Missing Leadership", type: "warning", message: "Consider adding leadership examples" },
    { id: 10, category: "Too Long (2.5 pages)", type: "warning", message: "Resume should be 1-2 pages maximum" },
  ],
  critical: [
    {
      id: 11,
      category: "Needs Quantified Results",
      type: "critical",
      message: "Add specific numbers and metrics to achievements",
    },
  ],
  suggestions: [
    {
      id: 12,
      category: "Missing Certifications",
      type: "suggestion",
      message: "Consider adding relevant certifications",
    },
  ],
}

const allFeedback = [
  ...feedbackData.strengths,
  ...feedbackData.warnings,
  ...feedbackData.critical,
  ...feedbackData.suggestions,
]

const contentFeedback = allFeedback.filter((item) =>
  ["Strong Action Verbs", "Good Keywords", "Needs Quantified Results", "Missing Leadership"].includes(item.category),
)

const formatFeedback = allFeedback.filter((item) =>
  ["Clean Layout", "Too Long (2.5 pages)", "ATS Compatible"].includes(item.category),
)

const technicalFeedback = allFeedback.filter((item) =>
  ["Skills Relevant", "Contact Info Complete", "Education Clear"].includes(item.category),
)

const enhancementFeedback = allFeedback.filter((item) =>
  ["Missing Certifications", "Experience Well-Structured"].includes(item.category),
)

const versionHistory = [
  { id: 1, name: "Resume_v3.pdf", date: "2024-01-15", score: 87, status: "current" },
  { id: 2, name: "Resume_v2.pdf", date: "2024-01-10", score: 82, status: "previous" },
  { id: 3, name: "Resume_v1.pdf", date: "2024-01-05", score: 75, status: "previous" },
]

export default function ResumeAnalysisPage() {
  const resumeScore = 87
  const readinessPercentage = 75

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

  const renderFeedbackItems = (items: typeof allFeedback) => (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className={`flex items-start gap-3 p-3 rounded-lg border ${getStatusColor(item.type)}`}>
          {getStatusIcon(item.type)}
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm">{item.category}</p>
            <p className="text-xs mt-1 opacity-80">{item.message}</p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Resume Analysis</h1>
              <p className="text-gray-600 mt-1">Get AI-powered feedback to optimize your resume</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{readinessPercentage}% Ready</span>
                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${readinessPercentage}%` }}
                  />
                </div>
              </div>
              <Button className="gap-2 bg-black hover:bg-gray-800">
                <Upload className="h-4 w-4" />
                Upload Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resume Score - Left Column */}
          <Card className="border border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="text-center">Resume Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              {/* Circular Progress */}
              <div className="relative w-32 h-32 mb-6">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200 stroke-current"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-blue-500 stroke-current"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={`${resumeScore}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">{resumeScore}</span>
                  <span className="text-sm text-gray-500">out of 100</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200 mb-2">
                  Good
                </Badge>
                <p className="text-sm text-gray-600">
                  Your resume scores above average! A few improvements could get you to 95+.
                </p>
              </div>

              <div className="w-full space-y-3">
                <Button className="w-full gap-2 bg-black hover:bg-gray-800">
                  <Download className="h-4 w-4" />
                  Download Report
                </Button>
                <Button className="w-full gap-2 bg-transparent" variant="outline">
                  <Eye className="h-4 w-4" />
                  Preview Resume
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Feedback - Right Column */}
          <Card className="border border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                AI Feedback Analysis
              </CardTitle>
              <p className="text-sm text-gray-600">Interactive feedback organized by category</p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="format">Format</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="enhancement">Enhancement</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                  {renderFeedbackItems(allFeedback)}
                </TabsContent>

                <TabsContent value="content" className="mt-6">
                  {renderFeedbackItems(contentFeedback)}
                </TabsContent>

                <TabsContent value="format" className="mt-6">
                  {renderFeedbackItems(formatFeedback)}
                </TabsContent>

                <TabsContent value="technical" className="mt-6">
                  {renderFeedbackItems(technicalFeedback)}
                </TabsContent>

                <TabsContent value="enhancement" className="mt-6">
                  {renderFeedbackItems(enhancementFeedback)}
                </TabsContent>
              </Tabs>

              {/* Summary Stats */}
              <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-sm text-gray-600">Strengths</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">2</div>
                  <div className="text-sm text-gray-600">Warnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">1</div>
                  <div className="text-sm text-gray-600">Critical</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1</div>
                  <div className="text-sm text-gray-600">Suggestions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
