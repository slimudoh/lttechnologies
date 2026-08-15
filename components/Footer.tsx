"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-slate-950">
                LT
              </div>

              <div>
                <span className="block text-lg font-bold tracking-tight">
                  LT Technologies
                </span>

                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  Build · Grow · Automate
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              We build powerful websites, web applications and mobile solutions,
              while helping businesses grow their digital presence and automate
              repetitive work with modern technology and AI.
            </p>

            <Link
              href="/consultation"
              className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Start a Project
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/services/software-development"
                  className="transition-colors hover:text-white"
                >
                  Web, Mobile & Software
                </Link>
              </li>

              <li>
                <Link
                  href="/services/ai-automation"
                  className="transition-colors hover:text-white"
                >
                  AI & Automation
                </Link>
              </li>

              <li>
                <Link
                  href="/services/digital-growth"
                  className="transition-colors hover:text-white"
                >
                  Digital Growth
                </Link>
              </li>

              <li>
                <Link
                  href="/services/managed-support"
                  className="transition-colors hover:text-white"
                >
                  Managed Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/work"
                  className="transition-colors hover:text-white"
                >
                  Our Work
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="transition-colors hover:text-white"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/insights"
                  className="transition-colors hover:text-white"
                >
                  Insights
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>

            <div className="space-y-4 text-sm text-slate-400">
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-slate-600">
                  Email
                </p>

                <a
                  href="mailto:info@lttechnologies.com"
                  className="transition-colors hover:text-white"
                >
                  info@lttechnologies.com
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-slate-600">
                  Phone
                </p>

                <a
                  href="tel:+2340000000000"
                  className="transition-colors hover:text-white"
                >
                  +234 000 000 0000
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-slate-600">
                  Location
                </p>

                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} LT Technologies. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
