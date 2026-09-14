import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function MoreProjects() {
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {otherProjects.map((project) => (
        <Card
          key={project.slug}
          className="group overflow-hidden border-0 bg-white shadow-md transition-all duration-300 pt-0"
        >
          <div className="relative h-56 overflow-hidden bg-gray-200">
            <Image
              src={project?.image || "/images/placeholder.jpg"}
              alt={`${project.title} — ${project.category}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <CardContent className="p-7">
            <Badge className="mb-4 bg-gray-100 text-gray-700 hover:bg-gray-100">
              {project.category}
            </Badge>

            <h3 className="mb-3 text-2xl font-bold text-gray-900">
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
              {project.technologies.length > 4 && (
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
