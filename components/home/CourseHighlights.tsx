import { courses } from "@/data/courses";
import { CourseGrid } from "@/components/courses/CourseGrid";

export function CourseHighlights() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Training Designed Around Your Goals
          </h2>
          <p className="mt-4 text-base text-muted">
            From English language testing to computer skills and healthcare training,
            explore programmes built around real outcomes.
          </p>
        </div>
        <div className="mt-12">
          <CourseGrid courses={courses} />
        </div>
      </div>
    </section>
  );
}
