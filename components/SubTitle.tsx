"use client";

export default function SubTitle({ title }: { title: string }) {
  return (
    <div className="w-fit mb-5 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm  text-cyan-700">
      {title}
    </div>
  );
}
