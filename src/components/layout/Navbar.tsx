"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/src/components/ui/LanguageSwitcher";
import { useTranslate } from "@/src/components/ui/LocalizedText";
import { companyNavLinks, productNavLinks, serviceNavLinks, type NavItem } from "@/src/content/siteContent";

type NavbarProps = {
  brandName: string;
};

type DropdownKey = "products" | "services";

function getBasePath(href: string) {
  return href.split("#")[0] || "/";
}

export function Navbar({ brandName }: NavbarProps) {
  const pathname = usePathname();
  const t = useTranslate();
  const desktopMenusRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const closeDesktopMenus = (event: MouseEvent) => {
      if (!desktopMenusRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", closeDesktopMenus);
    return () => {
      document.removeEventListener("mousedown", closeDesktopMenus);
    };
  }, []);

  const isActive = (href: string) => {
    const basePath = getBasePath(href);
    if (basePath === "/") {
      return pathname === "/";
    }
    return pathname === basePath || pathname.startsWith(`${basePath}/`);
  };

  const linkClasses = (href: string) =>
    `focus-ring rounded-md px-3 py-2 text-sm transition-colors ${
      isActive(href) ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

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
          {t("Menu")}
        </button>

        <div ref={desktopMenusRef} className="hidden items-center gap-2 md:flex">
          <DropdownMenu
            label="Products"
            items={productNavLinks}
            isOpen={openDropdown === "products"}
            onToggle={() => setOpenDropdown((prev) => (prev === "products" ? null : "products"))}
            onNavigate={closeMenus}
            t={t}
            linkClasses={linkClasses}
          />

          <DropdownMenu
            label="Services"
            items={serviceNavLinks}
            isOpen={openDropdown === "services"}
            onToggle={() => setOpenDropdown((prev) => (prev === "services" ? null : "services"))}
            onNavigate={closeMenus}
            t={t}
            linkClasses={linkClasses}
          />

          {companyNavLinks.map((item) => (
            <Link key={item.href} href={item.href} className={linkClasses(item.href)}>
              {t(item.label)}
            </Link>
          ))}

          <LanguageSwitcher />
        </div>
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
            <p className="mb-1 mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">{t("Products")}</p>
            {productNavLinks.map((item) => (
              <Link key={item.href} href={item.href} className={`${linkClasses(item.href)} block`} onClick={closeMenus}>
                {t(item.label)}
              </Link>
            ))}

            <p className="mb-1 mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">{t("Services")}</p>
            {serviceNavLinks.map((item) => (
              <Link key={item.href} href={item.href} className={`${linkClasses(item.href)} block`} onClick={closeMenus}>
                {t(item.label)}
              </Link>
            ))}

            <p className="mb-1 mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">{t("Company")}</p>
            {companyNavLinks.map((item) => (
              <Link key={item.href} href={item.href} className={`${linkClasses(item.href)} block`} onClick={closeMenus}>
                {t(item.label)}
              </Link>
            ))}

            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

type DropdownMenuProps = {
  label: string;
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  t: (value: string) => string;
  linkClasses: (href: string) => string;
};

function DropdownMenu({ label, items, isOpen, onToggle, onNavigate, t, linkClasses }: DropdownMenuProps) {
  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onNavigate();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          onNavigate();
        }
      }}
    >
      <button
        type="button"
        className="focus-ring rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={onToggle}
      >
        {t(label)}
      </button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="surface-strong absolute left-0 top-12 min-w-72 rounded-xl p-2"
            role="menu"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${linkClasses(item.href)} block`}
                role="menuitem"
                onClick={onNavigate}
              >
                {t(item.label)}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
