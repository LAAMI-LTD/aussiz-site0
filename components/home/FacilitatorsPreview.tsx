import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facilitators } from "@/data/facilitators";
import { FacilitatorCard } from "@/components/about/FacilitatorCard";

export function FacilitatorsPreview() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container-app">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Meet Our Facilitators
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted">
              Placeholder profiles — replace with verified facilitator information.
            </p>
          </div>
          <Link
            href="/about"
            className="focus-ring inline-flex shrink-0 items-center gap-1.5 rounded-md text-sm font-semibold text-orange hover:text-orange-light"
          >
            Meet Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {facilitators.map((facilitator) => (
            <FacilitatorCard key={facilitator.id} facilitator={facilitator} />
          ))}
        </div>
      </div>
    </section>
  );
}
