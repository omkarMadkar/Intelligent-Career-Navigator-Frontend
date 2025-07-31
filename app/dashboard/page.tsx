"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, Video, Users, CheckCircle, Clock, Calendar, TrendingUp, Crown, FileText, Star, User } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">
            Continue your career preparation journey. You're 75% ready for your next interview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Profile & Progress */}
          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <User className="h-8 w-8 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Alex Johnson</h3>
                  <p className="text-sm text-gray-600">Computer Science, Junior</p>
                  <p className="text-xs text-gray-500">MIT • Class of 2026</p>
                </div>
              </div>

              <div className="space-y-4">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
                  Free Tier
                </Badge>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Profile Completion</span>
                    <span className="text-sm font-bold text-blue-600">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Resume uploaded</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Mock interview taken</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Mentor session pending</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Crown className="h-4 w-4" />
                  Upgrade to Premium
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Career Compass */}
          <Card className="border border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Career Compass - Skill Assessment
              </CardTitle>
              <p className="text-sm text-gray-600">Track your strengths and identify areas for improvement</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Technical Skills</span>
                    <span className="text-sm font-bold">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-200" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Communication</span>
                    <span className="text-sm font-bold">70%</span>
                  </div>
                  <Progress value={70} className="h-2 bg-gray-200" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Leadership</span>
                    <span className="text-sm font-bold">60%</span>
                  </div>
                  <Progress value={60} className="h-2 bg-gray-200" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Problem Solving</span>
                    <span className="text-sm font-bold">80%</span>
                  </div>
                  <Progress value={80} className="h-2 bg-gray-200" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Teamwork</span>
                    <span className="text-sm font-bold">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-200" />
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Recommendation</p>
                    <p className="text-xs text-blue-700 mt-1">
                      Focus on improving your leadership skills through mock interviews and mentor sessions. Consider
                      taking a leadership course or joining student organizations.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Card className="border border-gray-200 bg-white hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Upload className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Upload Resume</h3>
              <p className="text-sm text-gray-600 mb-4">Get AI-powered feedback and scoring</p>
              <Button className="w-full bg-black hover:bg-gray-800">
                <Upload className="h-4 w-4 mr-2" />
                Analyze Resume
              </Button>
              <p className="text-xs text-gray-500 mt-2">Last upload: 2 days ago (Score: 87/100)</p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Try Mock Interview</h3>
              <p className="text-sm text-gray-600 mb-4">Practice with AI interviewer</p>
              <a href="https://aiinc-interview.netlify.app/" target="_blank" rel="noopener noreferrer" className="block mt-4">

              <Button variant="outline" className="w-full bg-transparent">
                Start Interview
              </Button>
              {/* <a href="https://aiinc-interview.netlify.app/" target="_blank" rel="noopener noreferrer" className="block mt-4"> */}
                {/* <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" type="button">
                  <Video className="h-4 w-4 mr-2" />
                  Try AI Mock Interview (External)
                </Button> */}
              </a>
              <p className="text-xs text-gray-500 mt-2">Free tier: 1 interview/month remaining</p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Book a Mentor</h3>
              <p className="text-sm text-gray-600 mb-4">Get guidance from industry experts</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Crown className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Premium Feature</span>
              </div>
              <p className="text-xs text-gray-500">500+ mentors available</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8 border border-gray-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Resume uploaded and analyzed</p>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-sm text-gray-600">Score improved from 72 to 87</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Video className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Mock interview completed</p>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-sm text-gray-600">Technical Interview - Software Engineer</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Mentor session scheduled</p>
                  <p className="text-sm text-gray-600">Career guidance with Sarah Chen</p>
                  <p className="text-xs text-gray-500">Tomorrow 3:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premium Upgrade Banner */}
        <Card className="mt-8 bg-gradient-to-r from-purple-600 to-purple-700 border-purple-600">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Unlock Premium Features</h3>
                <p className="text-sm text-purple-100">
                  Unlimited mock interviews, mentor bookings, and advanced analytics
                </p>
              </div>
              <Button className="bg-black hover:bg-gray-800 text-white">
                Upgrade Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
