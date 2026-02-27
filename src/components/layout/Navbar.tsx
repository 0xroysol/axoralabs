"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { servicePages } from "@/src/content/siteContent";

type NavbarProps = {
  brandName: string;
};

const navItems = [
  { label: "Demos", href: "/demos" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function Navbar({ brandName }: NavbarProps) {
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeServices = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", closeServices);
    return () => {
      document.removeEventListener("mousedown", closeServices);
    };
  }, []);

  const serviceLinks = useMemo(
    () => [
      { label: "All Services", href: "/services" },
      ...Object.values(servicePages).map((service) => ({
        label: service.navLabel,
        href: `/services/${service.slug}`
      }))
    ],
    []
  );

  const linkClasses = (href: string) =>
    `focus-ring rounded-md px-3 py-2 text-sm transition-colors ${
      pathname === href ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-700/30 bg-[#080d14]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-md font-display text-lg font-semibold tracking-wide">
          <span className="inline-flex h-2 w-2 rounded-full bg-cyan/90" />
          <span>{brandName}</span>
        </Link>

        <button
          type="button"
          className="focus-ring rounded-md border border-slate-600 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          <div
            ref={servicesRef}
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setServicesOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setServicesOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="focus-ring rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Services
            </button>
            <AnimatePresence>
              {servicesOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="surface-strong absolute left-0 top-12 min-w-64 rounded-xl p-2"
                  role="menu"
                >
                  {serviceLinks.map((item) => (
                    <Link key={item.href} href={item.href} className={`${linkClasses(item.href)} block`} role="menuitem">
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClasses(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-800/80 bg-slate-950/95 px-6 pb-4 md:hidden"
          >
            <p className="mb-1 mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">Services</p>
            {serviceLinks.map((item) => (
              <Link key={item.href} href={item.href} className={`${linkClasses(item.href)} block`}>
                {item.label}
              </Link>
            ))}
            <p className="mb-1 mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">Company</p>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`${linkClasses(item.href)} block`}>
                {item.label}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
