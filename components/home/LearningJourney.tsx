import { Compass, BookOpen, ClipboardCheck, TrendingUp, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your goal.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Prepare",
    description: "Build the necessary knowledge and skills.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Practice",
    description: "Apply your skills through practical learning.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Progress",
    description: "Track improvement and build confidence.",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "Achieve",
    description: "Move toward your academic or career goal.",
    icon: Trophy,
  },
];

export function LearningJourney() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange">
            The Aussiz Approach
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            A Learning Journey Built Around You
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-7 hidden h-px w-full bg-white/15 lg:block"
                />
              )}
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-orange ring-4 ring-navy">
                <step.icon className="h-6 w-6" />
              </span>
              <span className="mt-4 text-xs font-semibold tracking-widest text-orange">
                {step.number}
              </span>
              <h3 className="mt-1 font-heading text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-[14rem] text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
