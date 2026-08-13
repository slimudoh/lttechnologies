"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function MoreProjects() {
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {otherProjects.map((project) => (
        <Card
          key={project.title}
          className="group overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative h-56 overflow-hidden bg-gray-200">
            <Image
              src={project?.image || "/images/placeholder.jpg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <CardContent className="p-7">
            <Badge className="mb-4 bg-gray-100 text-gray-700 hover:bg-gray-100">
              {project.category}
            </Badge>

            <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900">
              {project.title}
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-600">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                >
                  {technology}
                </span>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="w-fit border-cyan-600 text-cyan-600 hover:bg-cyan-50"
            >
              <Link href="/work/tutorshub">
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
