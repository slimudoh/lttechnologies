import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-10">
      {featuredProjects.map((project, index) => (
        <Card
          key={project.slug}
          className="overflow-hidden border-0 bg-white shadow-lg mt-0 pt-0"
        >
          <div
            className={`grid lg:grid-cols-2 ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[320px] bg-gray-200">
              <Image
                src={project?.image || "/images/placeholder.jpg"}
                alt={`${project.title} — ${project.category}`}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <CardContent className="flex flex-col justify-center p-8 md:p-12">
              <Badge className="mb-5 w-fit bg-cyan-100 text-cyan-700 hover:bg-cyan-100">
                {project.category}
              </Badge>

              <h3 className="mb-4 text-3xl font-black text-gray-900">
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
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
