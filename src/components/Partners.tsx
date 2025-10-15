import { cn } from "@/lib/utils";

type Partner = {
  name: string;
  src: string;
  href?: string;
  className?: string;
};

const partners: Partner[] = [
  { name: "Jackson Physician Search", src: "/partners/jackson-physician-search.svg" },
  { name: "Jackson Healthcare", src: "/partners/jackson-healthcare.svg" },
  { name: "Battery Spy", src: "/partners/battery-spy.svg" },
  { name: "Coshatt", src: "/partners/coshatt.svg" },
  { name: "Cox Automotive", src: "/partners/cox-automotive.svg" },
  { name: "Capital Choice", src: "/partners/capital-choice.svg" },
  { name: "Acentra Health", src: "/partners/acentra-health.svg" },
  { name: "VitaFi", src: "/partners/vitafi.svg" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-heading font-bold text-foreground mb-10 text-center">
          Trusted by leading teams
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((p) => {
            const Tile = (
              <div className="group rounded-lg border border-border bg-secondary/40 hover:bg-secondary/60 transition">
                <div className="h-16 sm:h-20 flex items-center justify-center p-4">
                  <img
                    src={p.src}
                    alt={p.name}
                    width={160}
                    height={64}
                    loading="lazy"
                    className={cn("max-h-full w-auto object-contain", p.className)}
                  />
                </div>
              </div>
            );
            return p.href ? (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
              >
                {Tile}
              </a>
            ) : (
              <div key={p.name}>{Tile}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;


