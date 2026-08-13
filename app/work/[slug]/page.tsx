import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Layers,
  Code2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { getCaseStudy } from "@/lib/data";

interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  client: string;
  year: string;
  duration: string;
  services: string[];
  technologies: string[];
  heroImage: string;
  screenshots: { image: string; title: string; description: string }[];
  challenge: string[];
  approach: string[];
  solution: string[];
  results: string[];
  nextProject?: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) {
    return { title: "Case Study | LT Technologies" };
  }
  return {
    title: `${project.title} | Case Study | LT Technologies`,
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <section className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-4xl font-black text-gray-900">
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
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="mb-10 inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-cyan-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Our Work
          </Link>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-6 bg-cyan-100 px-4 py-2 text-cyan-700 hover:bg-cyan-100">
                {project.category}
              </Badge>
              <h1 className="mb-6 font-serif text-5xl font-black leading-tight text-gray-900 md:text-6xl">
                {project.title}
              </h1>
              <p className="mb-8 text-xl leading-8 text-gray-600">
                {project.shortDescription}
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-8 sm:grid-cols-4">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Client
                  </p>
                  <p className="font-semibold text-gray-900">
                    {project.client}
                  </p>
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
                src={project.heroImage || "/images/placeholder.jpg"}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Overview */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Project Overview
          </p>
          <h2 className="mb-6 font-serif text-4xl font-black text-gray-900 md:text-5xl">
            Building a better digital experience.
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            {project.description}
          </p>
        </div>
      </section>
      {/* Challenge */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                The Challenge
              </p>
              <h2 className="font-serif text-4xl font-black text-gray-900 md:text-5xl">
                What needed to be solved?
              </h2>
            </div>
            <div className="space-y-5">
              {project?.challenge?.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </div>
                  <p className="text-lg leading-7 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Approach */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Our Approach
              </p>
              <h2 className="mb-6 font-serif text-4xl font-black text-gray-900 md:text-5xl">
                Strategy before software.
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Good software starts with understanding the problem. We focused
                on creating a solution that was practical for users while
                providing a strong technical foundation for future growth.
              </p>
            </div>
            <div className="space-y-6">
              {project?.approach?.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-5 border-b border-gray-200 pb-6 last:border-0"
                >
                  <span className="font-serif text-2xl font-black text-cyan-600">
                    0{index + 1}
                  </span>
                  <p className="leading-7 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Solution */}
      <section className="bg-gray-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              The Solution
            </p>
            <h2 className="mb-5 font-serif text-4xl font-black text-white md:text-5xl">
              Turning the idea into a product.
            </h2>
            <p className="text-lg leading-8 text-gray-400">
              We combined product design, application development, integrations
              and infrastructure to create the final solution.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project?.solution?.map((item, index) => {
              const icons = [Layers, Code2, Zap, ShieldCheck, Code2, Layers];
              const Icon = icons[index % icons.length];
              return (
                <Card
                  key={item}
                  className="border border-gray-800 bg-gray-800/50 shadow-none"
                >
                  <CardContent className="p-7">
                    <Icon className="mb-5 h-7 w-7 text-cyan-400" />
                    <p className="leading-7 text-gray-300">{item}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Technology */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Technology
          </p>
          <h2 className="mb-6 font-serif text-4xl font-black text-gray-900 md:text-5xl">
            Built with modern technology.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-600">
            The technology stack was selected based on performance,
            maintainability, security and the long-term requirements of the
            product.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((technology) => (
              <Badge
                key={technology}
                variant="outline"
                className="px-5 py-2 text-sm"
              >
                {technology}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      {/* Screenshots */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Product Experience
            </p>
            <h2 className="mb-5 font-serif text-4xl font-black text-gray-900 md:text-5xl">
              Inside the product.
            </h2>
          </div>
          <div className="space-y-16">
            {project?.screenshots?.map((screenshot, index) => (
              <div
                key={screenshot.title}
                className="grid gap-10 lg:grid-cols-2 lg:items-center"
              >
                <div
                  className={`relative aspect-video overflow-hidden rounded-2xl bg-gray-200 shadow-xl ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <span className="mb-4 block font-serif text-5xl font-black text-cyan-100">
                    0{index + 1}
                  </span>
                  <h3 className="mb-4 font-serif text-3xl font-bold text-gray-900">
                    {screenshot.title}
                  </h3>
                  <p className="text-lg leading-8 text-gray-600">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Results */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              The Outcome
            </p>
            <h2 className="mb-5 font-serif text-4xl font-black text-gray-900 md:text-5xl">
              What we delivered.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {project?.results?.map((result) => (
              <div
                key={result}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-cyan-600" />
                <p className="leading-7 text-gray-700">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-600 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-5 font-serif text-4xl font-black text-white md:text-5xl">
            Have an idea like this?
          </h2>
          <p className="mb-8 text-lg leading-8 text-cyan-100 md:text-xl">
            Whether you're starting a new product, improving an existing system
            or automating a business process, we'd love to hear about it.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-white px-8 py-6 text-base text-cyan-600 hover:bg-gray-100 sm:w-auto"
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white bg-transparent px-8 py-6 text-base text-white hover:bg-white hover:text-cyan-600 sm:w-auto"
              >
                View More Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
