import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="container-app flex flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Ready to Take the Next Step?
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-white/75">
          Whatever your goal — English proficiency, digital skills, German language,
          healthcare training or professional development — Aussiz is ready to support
          your journey.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link href="/courses">
            <Button size="lg" className="w-full sm:w-auto">
              Explore Courses
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outlineOnDark" size="lg" className="w-full sm:w-auto">
              Contact Aussiz
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
