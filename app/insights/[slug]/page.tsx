import { getBlogPost, getAllBlogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import ArticleHero from "@/components/insights/ArticleHero";
import FeaturedImage from "@/components/insights/FeaturedImage";
import ArticleContent from "@/components/insights/ArticleContent";
import ArticleNavigation from "@/components/insights/ArticleNavigation";
import RelatedArticles from "@/components/insights/RelatedArticles";
import ArticleCta from "@/components/insights/ArticleCta";

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
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Article Hero */}
      <ArticleHero post={post} />

      {/* Featured Image */}
      <FeaturedImage post={post} />

      {/* Article Content */}
      <ArticleContent post={post} />

      {/* Previous / Next Navigation */}
      <ArticleNavigation posts={allPosts} slug={post.slug} />

      {/* Related Articles */}
      <RelatedArticles posts={relatedPosts} />

      <ArticleCta />

      <Footer />
    </div>
  );
}
