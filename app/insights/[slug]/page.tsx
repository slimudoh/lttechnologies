import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { getBlogPost, getAllBlogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insight | LT Technologies",
  description:
    "Practical insights on software development, AI, automation, digital growth, and technology for modern businesses.",
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) {
    notFound();
  }
  const allPosts = await getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);
  const previousPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  return (
    <div className="bg-white">
      {/* Article Hero */}
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
            <Badge className="border-0 bg-cyan-500/10 px-3 py-1.5 text-cyan-400 hover:bg-cyan-500/10">
              {post.category}
            </Badge>
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
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
      {/* Featured Image */}
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={post.thumbnail || "/images/insights/default.jpg"}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Article Content */}
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
                {post.tags.map((tag) => (
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
      {/* Previous / Next Navigation */}
      <section className="border-y border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {previousPost ? (
              <Link href={`/insights/${previousPost.slug}`}>
                <Card className="h-full border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
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
                <Card className="h-full border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
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
      {/* Related Articles */}
      {relatedPosts.length > 0 && (
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
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.slug}
                  className="overflow-hidden border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
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
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-slate-950 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.18),transparent_45%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10">
            <MessageCircle className="h-7 w-7 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a technology challenge?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us what you're trying to achieve. We'll help you determine the
            right technology solution for your business.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full bg-cyan-500 px-8 text-base font-semibold text-white hover:bg-cyan-400"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
