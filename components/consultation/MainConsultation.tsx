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
import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";

export default function MainConsultation() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    company: "",
    emailAddress: "",
    phoneNumber: "",
    service: "",
    project: "",
    budget: "",
    message: "",
    agreeToTerms: false,
  };

  const [buttonLoading, setButtonLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (!formData.agreeToTerms) {
      setSubmitError(
        "Please agree to the Privacy Policy before submitting your enquiry.",
      );
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.emailAddress ||
      !formData.service ||
      !formData.message
    ) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setButtonLoading(true);
    try {
      const result = await sendEmail({
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        emailAddress: formData.emailAddress,
        phoneNumber: formData.phoneNumber,
        service: formData.service,
        project: formData.project,
        budget: formData.budget,
        message: formData.message,
      });

      if (!result.success) {
        throw new Error(result.error);
      }

      toast.success("Your enquiry has been sent successfully.");
      setFormData(initialFormData);
    } catch (err: unknown) {
      toast.error(errorMessage(err));
    } finally {
      setButtonLoading(false);
    }
  };

  const errorMessage = (value: unknown) => {
    console.log({ value });
    let message = "Something went wrong. Please try again later.";
    if (value instanceof Error) {
      message = value?.message || message;
    } else if (typeof value === "string") {
      message = value;
    }
    return message;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl  font-bold text-gray-900">
                Tell Us About Your Project
              </CardTitle>
              <p className="text-gray-600  leading-relaxed">
                Complete the form and our team will get back to you to discuss
                your requirements and determine the best way forward.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="gap-0">
                      First Name<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Your first name"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="gap-0">
                      Last Name<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Your last name"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Business</Label>
                  <Input
                    placeholder="Your company or business name"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        company: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="gap-0">
                    Email Address<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Your email address"
                    type="text"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        emailAddress: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    placeholder="Your phone number"
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phoneNumber: e.target.value.replace(/[^0-9]/g, ""),
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="gap-0">
                    What can we help you with?
                    <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        service: value,
                      })
                    }
                  >
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
                  <Select
                    value={formData.project}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        project: value,
                      })
                    }
                  >
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
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        budget: value,
                      })
                    }
                  >
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
                  <Label htmlFor="message" className="gap-0">
                    Tell us about your project
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    placeholder="Describe what you want to build, the problem you're trying to solve, or the improvements you need..."
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    rows={6}
                    className="min-h-[200px]"
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        agreeToTerms: checked === true,
                      })
                    }
                    className="mt-0.5"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm text-gray-600 leading-relaxed block pt-0 mt-0 font-normal"
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
                {submitError && (
                  <p className="text-sm text-red-500">{submitError}</p>
                )}
                <Button
                  type="submit"
                  size="lg"
                  disabled={!formData.agreeToTerms || buttonLoading}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Project Enquiry{" "}
                  {buttonLoading && (
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                      width={"20"}
                      height={"20"}
                      style={{ marginLeft: "2px" }}
                    >
                      <path
                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                        opacity=".25"
                      />
                      <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          dur="0.75s"
                          values="0 12 12;360 12 12"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Information */}
          <div className="space-y-8">
            {/* What Happens Next */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl  font-bold text-gray-900">
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className=" font-bold text-gray-900 mb-1">
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
                    <h3 className=" font-bold text-gray-900 mb-1">
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
                    <h3 className=" font-bold text-gray-900 mb-1">
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
                    <h3 className=" font-bold text-gray-900 mb-1">
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
                <CardTitle className="text-2xl  font-bold text-gray-900">
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
                      <span className=" text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl  font-bold text-gray-900">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className=" font-bold text-gray-900">Email</p>
                    <p className="text-gray-600 ">hello@lttechnologies.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className=" font-bold text-gray-900">Phone</p>
                    <p className="text-gray-600 ">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className=" font-bold text-gray-900">Location</p>
                    <p className="text-gray-600 "> Nigeria </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className=" font-bold text-gray-900">Response Time</p>
                    <p className="text-gray-600 ">
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
