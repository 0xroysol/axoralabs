import Link from "next/link";
import { studioFooterLinks } from "@/src/content/studioContent";

type FooterProps = {
  statement: string;
  domain: string;
};

export function Footer({ statement, domain }: FooterProps) {
  return (
    <footer className="border-t border-white/8 bg-[#04050A] text-white">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-6 py-10 md:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md">
          <p className="text-sm leading-7 text-slate-400">{statement}</p>
          <Link
            href="/"
            className="focus-ring mt-4 inline-flex rounded-sm text-sm text-slate-500 transition hover:text-white"
          >
            © {new Date().getFullYear()} {domain}
          </Link>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
            {studioFooterLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded-sm transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
