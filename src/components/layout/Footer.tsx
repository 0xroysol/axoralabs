import Link from "next/link";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioFooterLinks } from "@/src/content/studioContent";

type FooterProps = {
  statement: string;
  domain: string;
};

export function Footer({ statement, domain }: FooterProps) {
  return (
    <footer className="border-t border-white/8 bg-[#05060A] text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-slate-400">
            <LocalizedText text={statement} />
          </p>
          <Link href="/" className="focus-ring mt-3 inline-flex rounded-sm text-sm text-slate-500 transition hover:text-white">
            © {new Date().getFullYear()} {domain}
          </Link>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
            {studioFooterLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded-sm transition hover:text-white">
                  <LocalizedText text={item.label} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
