"use client";
import type React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Users,
  Code2,
  Cloud,
  Bot,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/Footer";
import Hero from "@/components/contact/Hero";
import ContactMethods from "@/components/contact/ContactMethods";
import MainContact from "@/components/contact/MainContact";
import Services from "@/components/contact/Services";
import Process from "@/components/contact/Process";
import Faq from "@/components/contact/Faq";
import Cta from "@/components/contact/Cta";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    preferredContact: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
          <div className="max-w-xl w-full text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-cyan-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-4">
              Message Received
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Thank you for reaching out to LT Technologies. We've received your
              message and a member of our team will get back to you as soon as
              possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white">
                  Back to Homepage
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto border-cyan-600 text-cyan-600 hover:bg-cyan-50"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <Hero />

      {/* Contact Methods */}
      <ContactMethods />

      {/* Main Contact Section */}
      <MainContact />

      {/* Services */}
      <Services />

      {/* Process */}
      <Process />

      {/* FAQ */}
      <Faq />

      {/* CTA */}
      <Cta />

      <Footer />
    </div>
  );
}
