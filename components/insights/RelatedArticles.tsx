"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User } from "lucide-react";
import Link from "next/link";

export default function RelatedArticles({ posts }: { posts: any[] }) {
  return (
    <>
      {posts.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Keep Learning
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Related Insights
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-slate-600">
                Explore more practical insights related to this topic.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {posts.map((relatedPost) => (
                <Card
                  key={relatedPost.slug}
                  className="overflow-hidden border border-slate-200 shadow-sm transition-all"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={
                        relatedPost.thumbnail || "/images/insights/default.jpg"
                      }
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-4 top-4 border-0 bg-cyan-600 text-white">
                      {relatedPost.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-slate-900">
                      {relatedPost.title}
                    </h3>
                    <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-600">
                      {relatedPost.excerpt}
                    </p>
                    <div className="mb-5 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center">
                        <User className="mr-1 h-3.5 w-3.5" />
                        {relatedPost.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3.5 w-3.5" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                    <Link href={`/insights/${relatedPost.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-cyan-600 bg-transparent text-cyan-600 hover:bg-cyan-50"
                      >
                        Read Insight
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
