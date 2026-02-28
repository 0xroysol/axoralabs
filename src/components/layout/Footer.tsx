import { LocalizedText } from "@/src/components/ui/LocalizedText";

type FooterProps = {
  statement: string;
  domain: string;
};

export function Footer({ statement, domain }: FooterProps) {
  return (
    <footer className="border-t border-slate-700/30 bg-[#070b11]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-textSoft md:flex-row md:items-center md:justify-between">
        <p>
          <LocalizedText text={statement} />
        </p>
        <p>© {new Date().getFullYear()} {domain}</p>
      </div>
    </footer>
  );
}
