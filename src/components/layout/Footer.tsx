import Link from "next/link";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { companyNavLinks, productNavLinks, serviceNavLinks } from "@/src/content/siteContent";

type FooterProps = {
  statement: string;
  domain: string;
};

export function Footer({ statement, domain }: FooterProps) {
  return (
    <footer className="border-t border-slate-700/30 bg-[#070b11]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm text-textSoft">
            <LocalizedText text={statement} />
          </p>
          <p className="mt-3 text-sm text-textSoft">© {new Date().getFullYear()} {domain}</p>
        </div>

        <div className="grid gap-5 text-sm text-textSoft sm:grid-cols-3">
          <nav aria-label="Footer products">
            <p className="mb-2 font-semibold text-slate-100">
              <LocalizedText text="Products" />
            </p>
            <ul className="space-y-1.5">
              {productNavLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring rounded-sm hover:text-slate-100">
                    <LocalizedText text={item.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <p className="mb-2 font-semibold text-slate-100">
              <LocalizedText text="Services" />
            </p>
            <ul className="space-y-1.5">
              {serviceNavLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring rounded-sm hover:text-slate-100">
                    <LocalizedText text={item.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company">
            <p className="mb-2 font-semibold text-slate-100">
              <LocalizedText text="Company" />
            </p>
            <ul className="space-y-1.5">
              {companyNavLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring rounded-sm hover:text-slate-100">
                    <LocalizedText text={item.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
