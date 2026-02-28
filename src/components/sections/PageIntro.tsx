import { ReactNode } from "react";
import { LocalizedText } from "@/src/components/ui/LocalizedText";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, aside }: PageIntroProps) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 pb-10 pt-8 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-14 md:pt-12">
      <div>
        {eyebrow ? <LocalizedText text={eyebrow} as="p" className="eyebrow" /> : null}
        <LocalizedText
          text={title}
          as="h1"
          className="mt-4 font-display text-4xl font-semibold leading-tight text-slate-100 md:text-5xl"
        />
        <LocalizedText text={description} as="p" className="mt-5 max-w-2xl text-base leading-relaxed text-textSoft md:text-lg" />
      </div>
      {aside ? <div className="surface-strong rounded-2xl p-5">{aside}</div> : null}
    </section>
  );
}
