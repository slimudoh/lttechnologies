"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import SubTitle from "@/components/SubTitle";
import PageTitle from "../PageTitle";

export default function ProjectHero({ project }: { project: any }) {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/work"
          className="mb-10 inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-cyan-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Our Work
        </Link>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SubTitle title={project.category} />

            <PageTitle darkTitle={project.title} />

            <p className="mb-8 text-xl leading-8 text-gray-600">
              {project.shortDescription}
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-8 sm:grid-cols-4">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Client
                </p>
                <p className="font-semibold text-gray-900">{project.client}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Year
                </p>
                <p className="font-semibold text-gray-900">{project.year}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Category
                </p>
                <p className="font-semibold text-gray-900">
                  {project.category}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Engagement
                </p>
                <p className="font-semibold text-gray-900">
                  {project.duration}
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-2xl">
            <Image
              src="/images/pms-img-2.jpg"
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
