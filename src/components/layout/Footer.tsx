type FooterProps = {
  statement: string;
  domain: string;
};

export function Footer({ statement, domain }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-textSoft md:flex-row md:items-center md:justify-between">
        <p>{statement}</p>
        <p>© {new Date().getFullYear()} {domain}</p>
      </div>
    </footer>
  );
}
