"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/data";

export default function Featured() {
  const blogPosts = getAllBlogPosts();
  const featuredPost = blogPosts[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Featured Article
          </h2>
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-full">
                <Image
                  src={featuredPost.thumbnail || "/images/insights/default.jpg"}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">
                  {featuredPost.category}
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl  font-bold text-gray-900 mb-3">
                      {featuredPost.title}
                    </CardTitle>
                    <p className="text-gray-600 font-sans leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 font-sans mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <Link href={`/insights/${featuredPost.slug}`}>
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    Read Full Article
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
