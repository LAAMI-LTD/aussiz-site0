import {
  Users,
  Wrench,
  Target,
  Globe2,
  CalendarClock,
  LifeBuoy,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Facilitators",
    description: "Learn from knowledgeable and supportive trainers.",
  },
  {
    icon: Wrench,
    title: "Practical Training",
    description: "Focus on skills that can be applied beyond the classroom.",
  },
  {
    icon: Target,
    title: "Student-Focused Learning",
    description: "Training designed around individual goals and progress.",
  },
  {
    icon: Globe2,
    title: "Career & International Opportunities",
    description: "Prepare for academic, professional and international pathways.",
  },
  {
    icon: CalendarClock,
    title: "Convenient Learning",
    description: "Flexible options designed for different learner needs.",
  },
  {
    icon: LifeBuoy,
    title: "Support Beyond Training",
    description: "Help students navigate their next steps where applicable.",
  },
];

export function WhyAussiz() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Why Choose Aussiz?
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                <reason.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-navy">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
