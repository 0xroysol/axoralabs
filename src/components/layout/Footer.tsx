import Link from "next/link";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioNavLinks } from "@/src/content/studioContent";

type FooterProps = {
  statement: string;
  domain: string;
};

export function Footer({ statement, domain }: FooterProps) {
  return (
    <footer className="border-t border-[#ddd5c8] bg-[#f6f1e8] text-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-slate-600">
            <LocalizedText text={statement} />
          </p>
          <Link href="/" className="focus-ring mt-3 inline-flex rounded-sm text-sm text-slate-600 transition hover:text-slate-950">
            © {new Date().getFullYear()} {domain}
          </Link>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
            {studioNavLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded-sm transition hover:text-slate-950">
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
