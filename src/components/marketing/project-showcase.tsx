import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { getPayloadProjects } from "@/lib/cms";

// Static fallback images — used when Payload has no published projects.
// Arranged so similar shots (same site, same product) are never adjacent
// within a row, and images from the same session are split across rows.
const STATIC_ROW_1 = [
  "/projects/project-11.02.01.jpg",   // outdoor: red-tile roof installation
  "/projects/project-11.03.02.jpg",   // indoor:  SRNE inverter + battery
  "/projects/project-11.03.19.jpg",   // outdoor: worker on ground-mount
  "/projects/project-11.03.22.jpg",   // indoor:  Felicity + Syinc wall
  "/projects/project-11.03.26.jpg",   // outdoor: carport under palm trees
  "/projects/project-11.03.23.jpg",   // indoor:  Seven SS Stars showroom
  "/projects/project-11.03.30.jpg",   // outdoor: HANTI flat-panel heater
  "/projects/project-11.03.15.jpg",   // aerial:  container home (angle 1)
];

const STATIC_ROW_2 = [
  "/projects/project-11.03.17.jpg",   // aerial:  container home (angle 2)
  "/projects/project-11.03.28.jpg",   // outdoor: terrace with palm trees
  "/projects/project-11.03.37.jpg",   // indoor:  teal inverter + Felicity batteries
  "/projects/project-11.03.31.jpg",   // outdoor: HANTI heater (different angle)
  "/projects/project-11.03.27.jpg",   // indoor:  Felicity batteries, Maasai client
  "/projects/project-11.03.29.jpg",   // outdoor: Seven SS Stars on rooftop
  "/projects/project-11.03.35.jpg",   // indoor:  Felicity inverter on stone wall
  "/projects/project-11.03.24.jpg",   // indoor:  Seven SS Stars close-up
];

function MarqueeRow({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  const doubled = [...images, ...images];

  return (
    <div className="relative overflow-hidden group/row" style={{ touchAction: "pan-y" }}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-linear-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-linear-to-l from-surface to-transparent" />

      <div
        className={`flex gap-4 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee-gallery"
        } group-hover/row:[animation-play-state:paused]`}
        style={{ "--marquee-duration": "40s" } as React.CSSProperties}
      >
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-72 w-64 md:h-80 md:w-72 lg:h-96 lg:w-80 shrink-0 overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`Solarlux installation project ${(i % images.length) + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function ProjectShowcase() {
  const payloadProjects = await getPayloadProjects();

  let row1: string[];
  let row2: string[];

  if (payloadProjects.length >= 2) {
    // Split Payload project images across the two rows
    const images = payloadProjects.map((p) => p.image).filter(Boolean);
    const mid = Math.ceil(images.length / 2);
    row1 = images.slice(0, mid);
    row2 = images.slice(mid);
    // Pad short rows with the other row so the marquee always has enough frames
    if (row1.length < 3) row1 = [...row1, ...row2].slice(0, 6);
    if (row2.length < 3) row2 = [...row2, ...row1].slice(0, 6);
  } else {
    row1 = STATIC_ROW_1;
    row2 = STATIC_ROW_2;
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface overflow-hidden" aria-label="Project gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-ink tracking-wide mb-4">
            Our Work
          </span>
          <h2 className="text-display-lg font-display font-medium mx-auto max-w-xl">
            Real installations,{" "}
            <span className="text-ink-muted">real results</span>
          </h2>
        </FadeIn>
      </div>

      <div className="mt-12 md:mt-16 flex flex-col gap-4">
        <MarqueeRow images={row1} />
        <MarqueeRow images={row2} reverse />
      </div>

      <div className="mt-10 md:mt-14 text-center">
        <FadeIn delay={0.1}>
          <Button variant="secondary" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
