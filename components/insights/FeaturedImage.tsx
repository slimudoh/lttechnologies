"use client";

import Image from "next/image";

export default function FeaturedImage({ post }: { post: any }) {
  return (
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
  );
}
