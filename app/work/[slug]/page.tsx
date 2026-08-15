import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { getCaseStudy } from "@/lib/data";
import ProjectHero from "@/components/work/ProjectHero";
import ProjectOverview from "@/components/work/ProjectOverview";
import ProjectChallenge from "@/components/work/ProjectChallenge";
import ProjectApproach from "@/components/work/ProjectApproach";
import ProjectSolution from "@/components/work/ProjectSolution";
import ProjectTechnology from "@/components/work/ProjectTechnology";
import ProjectScreenshots from "@/components/work/ProjectScreenshots";
import ProjectResults from "@/components/work/ProjectResults";
import ProjectCta from "@/components/work/ProjectCta";
import ProjectNotFound from "@/components/work/ProjectNotFound";

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
    return <ProjectNotFound />;
  }
  return (
    <div className="bg-white">
      {/* Hero */}
      <ProjectHero project={project} />

      {/* Overview */}
      <ProjectOverview project={project} />

      {/* Challenge */}

      <ProjectChallenge project={project} />

      {/* Approach */}
      <ProjectApproach project={project} />

      {/* Solution */}

      <ProjectSolution project={project} />

      {/* Technology */}
      <ProjectTechnology project={project} />

      {/* Screenshots */}
      <ProjectScreenshots project={project} />

      {/* Results */}
      <ProjectResults project={project} />

      <ProjectCta />

      <Footer />
    </div>
  );
}
