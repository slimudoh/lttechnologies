"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "../Footer";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-white">
      <section className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4  text-4xl font-black text-gray-900">
            Project Not Found
          </h1>
          <p className="mb-8 text-gray-600">
            The project you're looking for doesn't exist.
          </p>
          <Link href="/work">
            <Button className="bg-cyan-600 text-white hover:bg-cyan-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Our Work
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
