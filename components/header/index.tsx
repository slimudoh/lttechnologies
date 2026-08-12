"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Bot,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { ServiceLink } from "@/components/header/ServiceLink";
import { MobileLink } from "@/components/header/MobileLink";
import { MobileSubLink } from "@/components/header/MobileSubLink";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [activeRoute, setActiveRoute] = useState(pathname);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={closeMenu}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-lg font-bold text-white shadow-lg shadow-slate-900/10 transition-transform group-hover:scale-105">
            LT
          </div>
          {/* <div className="hidden sm:block">
            <span className="block text-lg font-bold tracking-tight text-slate-950">
              LT Technologies
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Build · Grow · Automate
            </span>
          </div> */}
        </Link>
        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm  transition-colors hover:text-slate-950 ${activeRoute === "/" ? "font-bold text-slate-950" : "font-medium text-slate-600"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm  transition-colors hover:text-slate-950 ${activeRoute === "/about" ? " font-bold text-slate-950" : "font-medium text-slate-600"}`}
          >
            About
          </Link>
          {/* Services Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className={`flex items-center gap-1.5 text-sm   transition-colors hover:text-slate-950  ${activeRoute.includes("/services") ? "font-bold text-slate-950" : "font-medium text-slate-600"}`}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              <span className="cursor-pointer">Services</span>

              <ChevronDown
                className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isServicesOpen && (
              <div className="absolute left-1/2 top-full mt-4 w-[420px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">
                <div className="grid grid-cols-2 gap-1">
                  <ServiceLink
                    href="/services/software-development"
                    icon={<Code2 className="h-5 w-5" />}
                    title="Web, Mobile & Software"
                    description="Websites, web apps and mobile applications"
                    onClick={() => setIsServicesOpen(false)}
                  />
                  <ServiceLink
                    href="/services/ai-automation"
                    icon={<Bot className="h-5 w-5" />}
                    title="AI & Automation"
                    description="Smarter business processes"
                    onClick={() => setIsServicesOpen(false)}
                  />
                  <ServiceLink
                    href="/services/digital-growth"
                    icon={<TrendingUp className="h-5 w-5" />}
                    title="Digital Growth"
                    description="Content, SEO and digital presence"
                    onClick={() => setIsServicesOpen(false)}
                  />
                  <ServiceLink
                    href="/services/managed-support"
                    icon={<ShieldCheck className="h-5 w-5" />}
                    title="Managed Technology"
                    description="Ongoing support and maintenance"
                    onClick={() => setIsServicesOpen(false)}
                  />
                </div>
                <div className="mt-2 border-t border-slate-100 px-3 pt-3">
                  <Link
                    href="/services"
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                  >
                    View all services <span>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/work"
            className={`text-sm  transition-colors hover:text-slate-950 ${activeRoute === "/work" ? " font-bold text-slate-950" : "font-medium text-slate-600"}`}
          >
            Work
          </Link>
          <Link
            href="/pricing"
            className={`text-sm  transition-colors hover:text-slate-950 ${activeRoute === "/pricing" ? " font-bold text-slate-950" : "font-medium text-slate-600"}`}
          >
            Pricing
          </Link>
          <Link
            href="/insights"
            className={`text-sm  transition-colors hover:text-slate-950 ${activeRoute.includes("/insights") ? " font-bold text-slate-950" : "font-medium text-slate-600"}`}
          >
            Insights
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact">
            <Button
              variant="outline"
              className="rounded-full border-slate-200 px-5 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              Contact
            </Button>
          </Link>
          <Link href="/consultation">
            <Button className="rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 hover:bg-slate-800 cursor-pointer">
              Book a Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-xl p-2.5 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="space-y-1">
              <MobileLink href="/" onClick={closeMenu}>
                Home
              </MobileLink>
              <MobileLink href="/about" onClick={closeMenu}>
                About
              </MobileLink>
              {/* Mobile Services */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-slate-200 pl-3">
                    <MobileSubLink
                      href="/services/web-development"
                      onClick={closeMenu}
                    >
                      Web & App Development
                    </MobileSubLink>
                    <MobileSubLink
                      href="/services/ai-automation"
                      onClick={closeMenu}
                    >
                      AI & Business Automation
                    </MobileSubLink>
                    <MobileSubLink
                      href="/services/digital-growth"
                      onClick={closeMenu}
                    >
                      Digital Growth
                    </MobileSubLink>
                    <MobileSubLink
                      href="/services/managed-support"
                      onClick={closeMenu}
                    >
                      Managed Technology
                    </MobileSubLink>
                  </div>
                )}
              </div>
              <MobileLink href="/work" onClick={closeMenu}>
                Work
              </MobileLink>
              <MobileLink href="/pricing" onClick={closeMenu}>
                Pricing
              </MobileLink>
              <MobileLink href="/insights" onClick={closeMenu}>
                Insights
              </MobileLink>
              <MobileLink href="/contact" onClick={closeMenu}>
                Contact
              </MobileLink>
            </div>
            <div className="mt-5 border-t border-slate-100 pt-5">
              <Link href="/consultation" onClick={closeMenu}>
                <Button className="w-full rounded-xl bg-slate-950 py-6 text-base font-semibold text-white hover:bg-slate-800 ">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
