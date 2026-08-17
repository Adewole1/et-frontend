import Image from "next/image";
import { Eyebrow, SectionNumber } from "./ui";
import aboutImage from "@/assets/images/emmanuel-about.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell flex min-h-screen h-full flex-col justify-center">
      <SectionNumber withDivider>04</SectionNumber>
      <div className="grid items-center gap-5 md:grid-cols-[.9fr_1.3fr] md:gap-14 relative max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20">
        <div className="relative mx-auto w-full max-w-45 md:mx-0 md:max-w-[320px]">
          <span className="corner corner-tl" />
          <div className="relative aspect-4/5 overflow-hidden rounded-md">
            <Image
              src={aboutImage}
              alt="Emmanuel Tobiloba"
              fill
              sizes="(max-width: 768px) 180px, 35vw"
              className="object-cover"
            />
          </div>
          <span className="corner corner-br" />
          <div className="animate-spin-slower absolute -top-16 -right-36 size-56 rounded-full border border-dashed border-(--line)" />
        </div>
        <div className="relative">
          <Eyebrow>04 — About</Eyebrow>
          <h2 className="font-display mt-2 mb-3 text-[clamp(2rem,3vw,2.5rem)] font-semibold md:mt-3 md:mb-4">
            Data, delivered.
          </h2>
          <p className="max-w-[56ch] text-sm leading-[1.65] text-(--muted) md:text-[15px] md:leading-[1.8]">
            Data analyst, project manager, and operations lead. I turn analysis
            into delivery — and delivery into measurable results, without the
            theatrics of a slide deck nobody re-opens.
          </p>
        </div>
      </div>
    </section>
  );
}
