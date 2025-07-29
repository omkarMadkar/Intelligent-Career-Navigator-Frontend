"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Video, Users, Star, ChevronDown, Plus, User, CheckCircle, AlertCircle, Info } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Navigate Your Career with Intelligence
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Prepare for internships and placements with AI-powered resume analysis, mock interviews, and expert mentorship. Built for students, by students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-3 text-lg bg-black hover:bg-gray-800">
              <Plus className="h-5 w-5 mr-2" />
              Get Started as Student
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-white border-gray-300 hover:bg-gray-50">
              <User className="h-5 w-5 mr-2" />
              Join as Mentor
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Expert Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Career Success</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to ace your interviews and land your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Resume Analysis</h3>
                <p className="text-gray-600 mb-6">
                  Get instant feedback on your resume with our advanced AI technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Video className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mock Interviews</h3>
                <p className="text-gray-600 mb-6">
                  Practice with AI-powered mock interviews, tailored to your field.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Mentors</h3>
                <p className="text-gray-600 mb-6">
                  Connect with industry professionals for personalized guidance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Previews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">Resume Analysis Dashboard</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Overall Score</span>
                      <span className="text-lg font-bold">82/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 font-bold">85%</span>
                      </div>
                      <span className="text-sm text-gray-600">Keywords Goal</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-orange-600 font-bold">78%</span>
                      </div>
                      <span className="text-sm text-gray-600">Format Benchmark</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Video className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">AI Mock Interview</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">Current Question</div>
                    <p className="text-sm">"Tell me about a challenging project you worked on."</p>
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800">
                    <Video className="h-4 w-4 mr-2" />
                    Start Recording
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from students who landed their dream opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The AI mock interviews helped me land my dream internship at Google!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-medium">Sarah Chow</div>
                    <div className="text-sm text-gray-600">Computer Science Student, MIT</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Resume analysis feature identified gaps I never noticed. So incredible!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-medium">Michael Rodrigues</div>
                    <div className="text-sm text-gray-600">Business Major, Stanford</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Mentor sessions gave me the confidence I needed for interviews."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-medium">Priya Patel</div>
                    <div className="text-sm text-gray-600">Engineering Student, UC Berkeley</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about the platform</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">How does the AI resume analysis work?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-gray-600 mt-2">
                  Our AI analyzes your resume against industry standards, checking for formatting, keywords, grammar, and content quality to provide actionable feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Are the mock interviews realistic?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-gray-600 mt-2">
                  Yes! Our AI is trained on thousands of real interview questions and provides feedback on your answers, tone, and communication style.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">How do I book a mentor session?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-gray-600 mt-2">
                  Browse our mentor directory, view their profiles, and book sessions directly through the platform. All sessions are conducted through our integrated video system.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Is there a free tier available?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-gray-600 mt-2">
                  Yes! Free users get access to basic resume analysis and one mock interview per month. Premium users get unlimited access and mentor bookings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-white text-black rounded font-bold text-sm">
                  ICN
                </div>
                <span className="font-semibold">Intelligent Career Navigator</span>
              </div>
              <p className="text-gray-300 text-sm">
                Empowering students to navigate their career journey with AI-powered tools and expert guidance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/resume-analysis" className="hover:text-white">
                    Resume Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/mock-interview" className="hover:text-white">
                    Mock Interviews
                  </Link>
                </li>
                <li>
                  <Link href="/mentors" className="hover:text-white">
                    Mentor Network
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white">
                    Career Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-sm text-gray-300">
            <p>© 2023 Intelligent Career Navigator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
