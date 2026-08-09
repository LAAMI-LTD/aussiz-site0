import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Partnership() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container-app flex flex-col items-center gap-6 py-12 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy/5">
            <ShieldCheck className="h-7 w-7 text-navy" />
          </span>
          <div>
            <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
              Preparing You for Your Next Opportunity
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
              Aussiz Education &amp; Training works {siteConfig.partnership.statement.toLowerCase()}{" "}
              to support learners preparing for their English language testing journey.
            </p>
          </div>
        </div>
        <div className="rounded-md border border-border px-5 py-3 text-sm font-semibold text-navy">
          {siteConfig.partnership.statement}
        </div>
      </div>
    </section>
  );
}

