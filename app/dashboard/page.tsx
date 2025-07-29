"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, Video, Users, CheckCircle, Clock, Calendar, TrendingUp, Crown, FileText } from "lucide-react"

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Career Compass */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/placeholder.svg?height=64&width=64&text=AJ"
                      alt="Alex Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Alex Johnson</h3>
                    <p className="text-sm text-gray-600">Computer Science, Junior</p>
                    <p className="text-xs text-gray-500">MIT • Class of 2026</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
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

            {/* Career Compass */}
            <Card>
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
                    <Progress value={85} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Communication</span>
                      <span className="text-sm font-bold">70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Leadership</span>
                      <span className="text-sm font-bold">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Problem Solving</span>
                      <span className="text-sm font-bold">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Teamwork</span>
                      <span className="text-sm font-bold">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
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

          {/* Right Column - Action Cards & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Upload className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Upload Resume</h3>
                  <p className="text-sm text-gray-600 mb-4">Get AI-powered feedback and scoring</p>
                  <Button className="w-full">Analyze Resume</Button>
                  <p className="text-xs text-gray-500 mt-2">Get upload a new resume (under 5MB)</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Video className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Try Mock Interview</h3>
                  <p className="text-sm text-gray-600 mb-4">Practice with our AI interviewer</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Start Interview
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">Free tier: 1 interview/month remaining</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Book a Mentor</h3>
                  <p className="text-sm text-gray-600 mb-4">Get guidance from industry experts</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Premium Feature
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">500+ mentors available</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
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
                      <p className="text-xs text-gray-500">Tomorrow 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Premium Upgrade Banner */}
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Crown className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-900">Unlock Premium Features</h3>
                    <p className="text-sm text-purple-700">
                      Unlimited mock interviews, mentor bookings, and advanced analytics
                    </p>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">Upgrade Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
