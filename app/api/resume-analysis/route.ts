import { NextRequest, NextResponse } from 'next/server'

// Types for the API
interface ResumeAnalysisRequest {
  file: File
  industry?: string
  jobTitle?: string
}

interface ResumeAnalysisResponse {
  success: boolean
  data?: {
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
  error?: string
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

// Mock resume parsing function - replace with real API calls
async function parseResumeWithAPI(file: File): Promise<any> {
  // This is where you would integrate with real resume parsing APIs like:
  // - Affinda Resume Parser API
  // - Sovren Resume Parser
  // - HireAbility Resume Parser
  // - Your own AI model
  
  // Example integration with Affinda API:
  /*
  const formData = new FormData()
  formData.append('file', file)
  
  const response = await fetch('https://api.affinda.com/v3/resumes/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.AFFINDA_API_KEY}`,
    },
    body: formData
  })
  
  return await response.json()
  */
  
  // For now, return mock data
  return {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1-555-0123",
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
    experience: [
      {
        title: "Software Engineer",
        company: "Tech Corp",
        duration: "2022-2024",
        description: "Developed web applications using React and Node.js"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science",
        field: "Computer Science",
        institution: "University of Technology",
        year: "2022"
      }
    ]
  }
}

// Analyze resume content and generate feedback
function analyzeResumeContent(parsedData: any, industry?: string): ResumeAnalysisResponse['data'] {
  const strengths: FeedbackItem[] = []
  const warnings: FeedbackItem[] = []
  const critical: FeedbackItem[] = []
  const suggestions: FeedbackItem[] = []
  
  let overallScore = 70
  let readinessScore = 70
  
  // Analyze contact information
  if (parsedData.email && parsedData.phone) {
    strengths.push({
      id: "contact-complete",
      category: "Complete Contact Info",
      type: "good",
      message: "All contact information is present and properly formatted",
      priority: "high",
      impact: 8
    })
    overallScore += 5
  } else {
    critical.push({
      id: "contact-missing",
      category: "Missing Contact Info",
      type: "critical",
      message: "Phone number or email is missing",
      priority: "high",
      impact: 10
    })
    overallScore -= 10
  }
  
  // Analyze skills
  if (parsedData.skills && parsedData.skills.length >= 5) {
    strengths.push({
      id: "skills-good",
      category: "Strong Skills Section",
      type: "good",
      message: "Good variety of technical skills listed",
      priority: "high",
      impact: 8
    })
    overallScore += 8
  } else {
    warnings.push({
      id: "skills-limited",
      category: "Limited Skills",
      type: "warning",
      message: "Consider adding more relevant skills",
      priority: "medium",
      impact: 5
    })
    overallScore -= 3
  }
  
  // Analyze experience
  if (parsedData.experience && parsedData.experience.length > 0) {
    const hasQuantifiedResults = parsedData.experience.some((exp: any) => 
      exp.description && /\d+%|\d+%|\$\d+|\d+ people|\d+ users/.test(exp.description)
    )
    
    if (hasQuantifiedResults) {
      strengths.push({
        id: "quantified-results",
        category: "Quantified Achievements",
        type: "good",
        message: "Good use of numbers and metrics in experience descriptions",
        priority: "high",
        impact: 9
      })
      overallScore += 10
    } else {
      critical.push({
        id: "no-quantified-results",
        category: "Missing Quantified Results",
        type: "critical",
        message: "Add specific numbers and metrics to achievements",
        priority: "high",
        impact: 9
      })
      overallScore -= 8
    }
  } else {
    critical.push({
      id: "no-experience",
      category: "No Work Experience",
      type: "critical",
      message: "Add relevant work experience or internships",
      priority: "high",
      impact: 10
    })
    overallScore -= 15
  }
  
  // Analyze education
  if (parsedData.education && parsedData.education.length > 0) {
    strengths.push({
      id: "education-present",
      category: "Education Listed",
      type: "good",
      message: "Education section is complete and well-structured",
      priority: "medium",
      impact: 6
    })
    overallScore += 5
  }
  
  // Generate keyword analysis
  const industryKeywords = {
    "Software Development": ["JavaScript", "Python", "React", "Node.js", "SQL", "Git", "AWS", "Docker"],
    "Data Science": ["Python", "R", "SQL", "Machine Learning", "Statistics", "Pandas", "NumPy"],
    "Marketing": ["SEO", "Google Analytics", "Social Media", "Content Marketing", "Email Marketing"],
    "Finance": ["Excel", "Financial Modeling", "Accounting", "Risk Management", "Bloomberg"]
  }
  
  const targetKeywords = industryKeywords[industry as keyof typeof industryKeywords] || industryKeywords["Software Development"]
  const foundKeywords = targetKeywords.filter(keyword => 
    parsedData.skills?.some((skill: string) => 
      skill.toLowerCase().includes(keyword.toLowerCase())
    )
  )
  const missingKeywords = targetKeywords.filter(keyword => 
    !foundKeywords.includes(keyword)
  )
  
  if (foundKeywords.length >= 5) {
    strengths.push({
      id: "good-keywords",
      category: "Strong Keyword Match",
      type: "good",
      message: "Good alignment with industry keywords",
      priority: "high",
      impact: 8
    })
    overallScore += 8
  } else {
    warnings.push({
      id: "missing-keywords",
      category: "Missing Keywords",
      type: "warning",
      message: `Consider adding: ${missingKeywords.slice(0, 3).join(", ")}`,
      priority: "medium",
      impact: 6
    })
    overallScore -= 4
  }
  
  // Generate suggestions
  const suggestions = []
  if (missingKeywords.length > 0) {
    suggestions.push(`Add missing keywords: ${missingKeywords.slice(0, 3).join(", ")}`)
  }
  if (!parsedData.experience?.some((exp: any) => exp.description?.includes("%"))) {
    suggestions.push("Add quantifiable achievements to experience descriptions")
  }
  if (parsedData.skills?.length < 8) {
    suggestions.push("Expand your skills section with more relevant technologies")
  }
  suggestions.push("Consider adding a projects section to showcase technical skills")
  
  // Calculate readiness score based on overall score
  readinessScore = Math.min(95, Math.max(60, overallScore + 10))
  
  return {
    id: Date.now().toString(),
    fileName: "uploaded-resume.pdf",
    uploadDate: new Date().toISOString(),
    overallScore: Math.max(50, Math.min(100, overallScore)),
    readinessScore,
    feedback: { strengths, warnings, critical, suggestions },
    sections: {
      contact: { 
        score: parsedData.email && parsedData.phone ? 90 : 60, 
        feedback: parsedData.email && parsedData.phone ? ["Complete contact info"] : ["Missing phone or email"],
        suggestions: parsedData.email && parsedData.phone ? [] : ["Add missing contact information"]
      },
      summary: { 
        score: 75, 
        feedback: ["Good overview", "Could be more specific"], 
        suggestions: ["Quantify achievements", "Make more targeted to specific roles"]
      },
      experience: { 
        score: parsedData.experience?.length > 0 ? 85 : 50, 
        feedback: parsedData.experience?.length > 0 ? ["Experience listed"] : ["No experience found"],
        suggestions: parsedData.experience?.length > 0 ? ["Add more quantifiable results"] : ["Add relevant work experience"]
      },
      education: { 
        score: parsedData.education?.length > 0 ? 90 : 60, 
        feedback: parsedData.education?.length > 0 ? ["Education complete"] : ["Education missing"],
        suggestions: parsedData.education?.length > 0 ? ["Consider adding GPA if above 3.5"] : ["Add education information"]
      },
      skills: { 
        score: parsedData.skills?.length >= 5 ? 85 : 65, 
        feedback: parsedData.skills?.length >= 5 ? ["Good skills variety"] : ["Limited skills listed"],
        suggestions: parsedData.skills?.length >= 5 ? ["Add proficiency levels"] : ["Add more relevant skills"]
      },
      formatting: { 
        score: 88, 
        feedback: ["Clean structure", "Good organization"], 
        suggestions: ["Consider adding a skills matrix", "Use consistent formatting"]
      },
    },
    keywords: {
      found: foundKeywords,
      missing: missingKeywords,
      industry: industry || "Software Development"
    },
    atsCompatibility: {
      score: 85,
      issues: ["Some formatting may not parse correctly in all ATS systems"]
    },
    suggestions
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const industry = formData.get('industry') as string
    const jobTitle = formData.get('jobTitle') as string
    
    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      )
    }
    
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid file type. Please upload PDF, DOC, or DOCX files.' },
        { status: 400 }
      )
    }
    
    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: 'File too large. Please upload files smaller than 5MB.' },
        { status: 400 }
      )
    }
    
    // Parse resume with API
    const parsedData = await parseResumeWithAPI(file)
    
    // Analyze content and generate feedback
    const analysis = analyzeResumeContent(parsedData, industry)
    
    return NextResponse.json({
      success: true,
      data: analysis
    })
    
  } catch (error) {
    console.error('Resume analysis error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to analyze resume. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Resume Analysis API - Use POST method to analyze resumes' },
    { status: 200 }
  )
} 