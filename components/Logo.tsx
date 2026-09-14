"use client";

export default function Logo({
  bgColor,
  textColor,
}: {
  bgColor: string;
  textColor: string;
}) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center text-2xl font-bold  ${bgColor} ${textColor}`}
    >
      LT
    </div>
  );
}
