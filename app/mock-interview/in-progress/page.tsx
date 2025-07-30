"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, Mic, Volume2, ChevronLeft, ChevronRight, Eye, CheckCircle } from "lucide-react"

export default function MockInterviewInProgressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Badge variant="destructive" className="mb-2">
            LIVE INTERVIEW
          </Badge>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Mock Interview in Progress</h1>
          <p className="text-gray-600">Take your time and answer thoughtfully. You're doing great!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Interview Area */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                {/* Interview Type & Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Technical Interview - Software Engineer</span>
                    <span className="text-sm text-gray-600">Question 1 of 5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-blue-500 h-1 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>

                {/* Video Preview */}
                <div className="bg-gray-100 rounded-lg p-8 mb-6 flex flex-col items-center justify-center">
                  <Video className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-gray-600">Your video preview</p>
                </div>

                {/* Interview Question */}
                <div className="bg-gray-800 text-white rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-300 mb-2">AI Interview Question 1</div>
                  <p className="text-lg">"Tell me about yourself and your background."</p>
                </div>

                {/* Controls */}
                <div className="flex gap-3 mb-6">
                  <Button className="flex-1 bg-black hover:bg-gray-800">
                    <Mic className="h-4 w-4 mr-2" />
                    Start Recording
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Video className="h-4 w-4 mr-2" />
                    Toggle Video
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Volume2 className="h-4 w-4 mr-2" />
                    Repeat Question
                  </Button>
                </div>

                {/* Recording Timer */}
                <div className="text-center mb-6">
                  <div className="text-2xl font-mono">00:00</div>
                  <div className="text-sm text-gray-600">Recording time</div>
                </div>

                {/* Navigation */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous Question
                  </Button>
                  <Button className="flex-1 bg-black hover:bg-gray-800">
                    Next Question
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Tips */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Eye className="h-5 w-5" />
                  Live Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Maintain eye contact with the camera</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Speak clearly and at a moderate pace</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use specific examples in your answers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Keep answers concise but detailed</span>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tip */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Eye className="h-5 w-5" />
                  Pro Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Use the STAR method (Situation, Task, Action, Result) to structure your answers for behavioral questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 