"use client";

import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";

export default function ArticleContent({ post }: { post: any }) {
  return (
    <article className="py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className=" prose prose-lg max-w-none font-sans prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-h2:mb-6 prose-h2:mt-14 prose-h2:text-3xl prose-h3:mb-4 prose-h3:mt-10 prose-h3:text-2xl prose-p:mb-6 prose-p:leading-8 prose-p:text-slate-700 prose-ul:my-6 prose-li:text-slate-700 prose-strong:font-semibold prose-strong:text-slate-900 prose-a:font-medium prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-14 border-t border-slate-200 pt-8">
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-cyan-600" />
              <h3 className="text-lg font-semibold text-slate-900">
                Topics covered
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
