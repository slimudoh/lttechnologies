"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-10">
      {featuredProjects.map((project, index) => (
        <Card
          key={project.title}
          className="overflow-hidden border-0 bg-white shadow-lg"
        >
          <div
            className={`grid lg:grid-cols-2 ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[320px] bg-gray-200">
              <Image
                src={project?.image || "/images/placeholder.jpg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <CardContent className="flex flex-col justify-center p-8 md:p-12">
              <Badge className="mb-5 w-fit bg-cyan-100 text-cyan-700 hover:bg-cyan-100">
                {project.category}
              </Badge>

              <h3 className="mb-4  text-3xl font-black text-gray-900">
                {project.title}
              </h3>

              <p className="mb-6 leading-7 text-gray-600">
                {project.description}
              </p>

              <div className="mb-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="outline"
                      className="font-normal"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-8 flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-600" />
                <p className="text-sm leading-6 text-gray-600">
                  {project.result}
                </p>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-fit border-cyan-600 text-cyan-600 hover:bg-cyan-50"
              >
                <Link href="/work/tutorshub">View Case Study</Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
