"use client";

export default function PageTitle({
  whiteTitle = "",
  darkTitle = "",
  coloredTitle = "",
}: {
  whiteTitle?: string;
  darkTitle?: string;
  coloredTitle?: string;
}) {
  return (
    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
      {darkTitle} <span className="text-white">{whiteTitle}</span>{" "}
      <span className="text-cyan-600">{coloredTitle}</span>
    </h1>
  );
}
