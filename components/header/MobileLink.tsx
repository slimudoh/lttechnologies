"use client";

import Link from "next/link";

export function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950 cursor-pointer"
    >
      {children}
    </Link>
  );
}
