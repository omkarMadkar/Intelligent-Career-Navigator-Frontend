"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Star, Crown, User, Building2 } from "lucide-react"

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "Google",
    rating: 4.9,
    sessions: 127,
    available: true,
    skills: ["System Design", "Algorithms", "Career Guidance"],
    rate: 80,
    image: "SC"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "Microsoft",
    rating: 4.8,
    sessions: 89,
    available: false,
    skills: ["Product Strategy", "Market Analysis", "Leadership"],
    rate: 75,
    image: "MR"
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    role: "Data Science Director",
    company: "Netflix",
    rating: 4.9,
    sessions: 156,
    available: true,
    skills: ["Machine Learning", "Data Analytics", "Research"],
    rate: 100,
    image: "PP"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Investment Banking VP",
    company: "Goldman Sachs",
    rating: 4.7,
    sessions: 203,
    available: true,
    skills: ["Finance", "Investment Banking", "Case Studies"],
    rate: 120,
    image: "JW"
  },
  {
    id: 5,
    name: "Emily Kim",
    role: "UX Design Lead",
    company: "Airbnb",
    rating: 4.8,
    sessions: 94,
    available: true,
    skills: ["UX Design", "Product Design", "User Research"],
    rate: 70,
    image: "EK"
  },
  {
    id: 6,
    name: "David Thompson",
    role: "Management Consultant",
    company: "McKinsey & Company",
    rating: 4.9,
    sessions: 178,
    available: true,
    skills: ["Strategy Consulting", "Case Interview", "Business Analysis"],
    rate: 90,
    image: "DT"
  }
]

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Expert Mentors</h1>
          <p className="text-gray-600">Connect with industry professionals for personalized career guidance</p>
        </div>

        {/* Search and Filters */}
        <Card className="border border-gray-200 bg-white mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search mentors, companies, skills..."
                    className="pl-10"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software-engineer">Software Engineer</SelectItem>
                    <SelectItem value="product-manager">Product Manager</SelectItem>
                    <SelectItem value="data-scientist">Data Scientist</SelectItem>
                    <SelectItem value="designer">UX/UI Designer</SelectItem>
                    <SelectItem value="consultant">Management Consultant</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="microsoft">Microsoft</SelectItem>
                    <SelectItem value="netflix">Netflix</SelectItem>
                    <SelectItem value="goldman-sachs">Goldman Sachs</SelectItem>
                    <SelectItem value="airbnb">Airbnb</SelectItem>
                    <SelectItem value="mckinsey">McKinsey & Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="alumni" />
                  <label htmlFor="alumni" className="text-sm font-medium">College Alumni Only</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="available" />
                  <label htmlFor="available" className="text-sm font-medium">Available Now</label>
                </div>
                <div className="ml-auto text-sm text-gray-600">
                  6 mentors found
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mentor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="border border-gray-200 bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">{mentor.image}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">{mentor.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Building2 className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{mentor.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{mentor.rating}</span>
                  <span className="text-sm text-gray-500">• {mentor.sessions} sessions</span>
                  <div className="ml-auto flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${mentor.available ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                    <span className="text-xs text-gray-500">
                      {mentor.available ? 'Available' : 'Busy'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${mentor.rate}/hr</span>
                  <Button variant="outline" size="sm" className="bg-black text-white hover:bg-gray-800">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Access Banner */}
        <Card className="border-0 bg-gradient-to-r from-purple-600 to-purple-700">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-lg">Unlock Premium Mentor Access</h3>
                <p className="text-purple-100">
                  Get unlimited bookings, priority scheduling, and exclusive access to top-tier mentors
                </p>
              </div>
              <Button className="bg-black hover:bg-gray-800 text-white">
                Upgrade to Premium
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 