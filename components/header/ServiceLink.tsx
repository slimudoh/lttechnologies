"use client";

import Link from "next/link";

export default function ServiceLink({
  href,
  icon,
  title,
  description,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group rounded-xl p-3 transition-colors hover:bg-slate-50"
    >
      <div className="flex gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-950 group-hover:text-white">
          {icon}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900"> {title} </p>
          <p className="mt-0.5 text-xs leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
