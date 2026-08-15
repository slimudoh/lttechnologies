"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ArticleNavigation({
  posts,
  slug,
}: {
  posts: any[];
  slug: string;
}) {
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const previousPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <section className=" bg-white py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {previousPost ? (
            <Link href={`/insights/${previousPost.slug}`}>
              <Card className="h-full border border-slate-200 shadow-sm transition-all">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center text-sm font-medium text-cyan-600">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous Insight
                  </div>
                  <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
                    {previousPost.title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link href={`/insights/${nextPost.slug}`}>
              <Card className="h-full border border-slate-200 shadow-sm transition-all">
                <CardContent className="p-6 text-left md:text-right">
                  <div className="mb-3 flex items-center justify-start text-sm font-medium text-cyan-600 md:justify-end">
                    Next Insight <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                  <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
                    {nextPost.title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
