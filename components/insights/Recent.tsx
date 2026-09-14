"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, FileText } from "lucide-react";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/data";
import Image from "next/image";

export default function Recent() {
  const blogPosts = getAllBlogPosts();
  const recentPosts = blogPosts.slice(1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl  font-bold text-gray-900 mb-4">
          Recent Articles
        </h2>

        {recentPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 px-4 border border-dashed border-gray-300 rounded-lg bg-white">
            <div className="h-14 w-14 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              No recent articles yet
            </h3>
            <p className="text-sm text-gray-500 max-w-sm">
              Check back soon — new articles will show up here as soon as
              they&apos;re published.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.slug}
                className="border-0 shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={post.thumbnail || "/images/placeholder.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-cyan-100 text-cyan-700">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl  font-bold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-600  text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardHeader>
                  <div className="flex items-center justify-between text-xs text-gray-500  mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/insights/${post.slug}`}>
                    <Button className="w-full rounded-sm bg-cyan-600 px-5 text-sm text-white shadow-lg shadow-cyan-600/10 hover:bg-cyan-500 cursor-pointer">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
