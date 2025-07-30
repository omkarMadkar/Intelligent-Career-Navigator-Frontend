"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Video, Users, MessageSquare, Crown, Play, Wifi, Lightbulb, Camera, Mic, Volume2 } from "lucide-react"
import Link from "next/link"

export default function MockInterviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Mock Interview</h1>
          <p className="text-gray-600">
            Practice with our AI interviewer and get real-time feedback to improve your performance
          </p>
        </div>

        {/* Interview Setup Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border border-gray-200 bg-white">
            <CardHeader>
              <CardTitle>Interview Setup</CardTitle>
              <p className="text-sm text-gray-600">Configure your mock interview preferences</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Interview Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Interview Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border border-gray-200 bg-white hover:border-blue-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <MessageSquare className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">General Interview</h3>
                          <p className="text-sm text-gray-600">Common behavioral and situational questions</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200 bg-white hover:border-purple-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Video className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Technical Interview</h3>
                          <p className="text-sm text-gray-600">Role-specific technical questions</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200 bg-white hover:border-green-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Crown className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Leadership Interview</h3>
                          <p className="text-sm text-gray-600">Focus on leadership and management skills</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200 bg-white hover:border-orange-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Users className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Club Custom</h3>
                          <p className="text-sm text-gray-600">Custom questions set by your college club</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Role/Position */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role/Position</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select target role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software-engineer">Software Engineer</SelectItem>
                    <SelectItem value="product-manager">Product Manager</SelectItem>
                    <SelectItem value="data-scientist">Data Scientist</SelectItem>
                    <SelectItem value="designer">UX/UI Designer</SelectItem>
                    <SelectItem value="marketing">Marketing Specialist</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="intern">Intern</SelectItem>
                    <SelectItem value="entry-level">Entry Level</SelectItem>
                    <SelectItem value="mid-level">Mid Level</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Interview Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Interview Duration</label>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 bg-blue-50 border-blue-200 text-blue-700">
                    15 minutes
                  </Button>
                  <Button variant="outline" className="flex-1">
                    30 minutes
                  </Button>
                  <Button variant="outline" className="flex-1">
                    45 minutes
                  </Button>
                </div>
              </div>

              {/* Before You Start */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-3">Before You Start</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-center gap-2">
                    <Wifi className="h-4 w-4" />
                    Ensure you have a stable internet connection
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Find a quiet, well-lit space
                  </li>
                  <li className="flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    Test your camera and microphone
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Have a copy of your resume ready
                  </li>
                </ul>
              </div>

              {/* Start Interview Button */}
              <Link href="https://aiinc-interview.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-black hover:bg-gray-800 text-lg py-3">
                  <Play className="h-5 w-5 mr-2" />
                  Start Interview
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 