"use client";

import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import SubTitle from "../SubTitle";
import PageTitle from "../PageTitle";

export default function ArticleHero({ post }: { post: any }) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Link
          href="/insights"
          className="mb-8 inline-flex items-center text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
        </Link>
        <div className="mb-6">
          <SubTitle title={post.category} />
        </div>

        <PageTitle whiteTitle={post.title} />

        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
          {post.excerpt}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4 text-cyan-400" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-cyan-400" />
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-cyan-400" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
