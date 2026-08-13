"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "@radix-ui/react-checkbox";

export default function MainConsultation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-serif font-bold text-gray-900">
                Tell Us About Your Project
              </CardTitle>
              <p className="text-gray-600 font-sans leading-relaxed">
                Complete the form and our team will get back to you to discuss
                your requirements and determine the best way forward.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company / Business</Label>
                  <Input placeholder="Your company or business name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input type="text" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="text" placeholder="Your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">What can we help you with? *</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-app-development">
                        Web & App Development
                      </SelectItem>
                      <SelectItem value="ai-automation">
                        AI & Automation
                      </SelectItem>
                      <SelectItem value="digital-growth">
                        Digital Growth
                      </SelectItem>
                      <SelectItem value="managed-technology">
                        Managed Technology
                      </SelectItem>
                      <SelectItem value="technology-consulting">
                        Technology Consulting
                      </SelectItem>
                      <SelectItem value="other">Something Else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectStage">
                    Where are you with the project?
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select project stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idea">I have an idea</SelectItem>
                      <SelectItem value="planning">
                        Planning the project
                      </SelectItem>
                      <SelectItem value="development">
                        Already in development
                      </SelectItem>
                      <SelectItem value="existing">
                        I have an existing system
                      </SelectItem>
                      <SelectItem value="improvement">
                        I need to improve an existing system
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1m">Under ₦1 million</SelectItem>
                      <SelectItem value="1m-5m">
                        ₦1 million – ₦5 million
                      </SelectItem>
                      <SelectItem value="5m-10m">
                        ₦5 million – ₦10 million
                      </SelectItem>
                      <SelectItem value="10m-plus">₦10 million+</SelectItem>
                      <SelectItem value="not-sure">I'm not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project *</Label>
                  <Textarea
                    placeholder="Describe what you want to build, the problem you're trying to solve, or the improvements you need..."
                    rows={6}
                    className="min-h-[200px]"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="text-sm text-gray-600 leading-relaxed block pt-0 mt-0"
                  >
                    I agree to the{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-cyan-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and consent to LT Technologies contacting me about my
                    enquiry.
                  </Label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg cursor-pointer"
                >
                  Send Project Enquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Information */}
          <div className="space-y-8">
            {/* What Happens Next */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 mb-1">
                      We Review Your Request
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We'll review your requirements and learn more about the
                      problem you're trying to solve.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 mb-1">
                      We Schedule a Discussion
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We'll arrange a convenient time to discuss your
                      requirements, goals, timeline, and priorities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 mb-1">
                      We Recommend a Solution
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Based on your needs, we'll recommend an approach,
                      technology stack, scope, and potential next steps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 mb-1">
                      We Build & Deliver
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Once we agree on the scope, our team turns the plan into a
                      reliable, scalable solution.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Services */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                  What We Can Help With
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Web Applications",
                    "Mobile Applications",
                    "Business Software",
                    "AI Solutions",
                    "Process Automation",
                    "API Development",
                    "Cloud Solutions",
                    "System Modernisation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-cyan-600 shrink-0" />
                      <span className="font-sans text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-gray-900">Email</p>
                    <p className="text-gray-600 font-sans">
                      hello@lttechnologies.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-gray-900">Phone</p>
                    <p className="text-gray-600 font-sans">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-gray-900">
                      Location
                    </p>
                    <p className="text-gray-600 font-sans"> Nigeria </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-gray-900">
                      Response Time
                    </p>
                    <p className="text-gray-600 font-sans">
                      Usually within one business day
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
