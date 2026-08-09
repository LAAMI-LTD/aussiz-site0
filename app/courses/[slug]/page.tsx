import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { courses, getCourseBySlug } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AccordionSingle } from "@/components/ui/accordion";
import { CTASection } from "@/components/home/CTASection";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.name,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <>
      <section className="bg-white py-14 md:py-20">
        <div className="container-app">
          <Badge variant="orange">{course.category}</Badge>
          <h1 className="mt-4 font-heading text-3xl font-bold text-navy sm:text-4xl">
            {course.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {course.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact">
              <Button>
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline">Back to All Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 md:py-16">
        <div className="container-app grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="font-heading text-xl font-bold text-navy">Overview</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{course.overview}</p>
            </div>

            {course.whoItsFor && course.whoItsFor.length > 0 && (
              <div>
                <h2 className="font-heading text-xl font-bold text-navy">Who It&apos;s For</h2>
                <ul className="mt-3 space-y-2">
                  {course.whoItsFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.learningOutcomes && course.learningOutcomes.length > 0 && (
              <div>
                <h2 className="font-heading text-xl font-bold text-navy">Learning Outcomes</h2>
                <ul className="mt-3 space-y-2">
                  {course.learningOutcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.modules && course.modules.length > 0 && (
              <div>
                <h2 className="font-heading text-xl font-bold text-navy">Modules</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {course.modules.map((module) => (
                    <Badge key={module} variant="navy">
                      {module}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {course.faqs && course.faqs.length > 0 && (
              <div>
                <h2 className="font-heading text-xl font-bold text-navy">FAQs</h2>
                <div className="mt-3">
                  <AccordionSingle items={course.faqs} />
                </div>
              </div>
            )}
          </div>

          <aside className="h-fit rounded-lg border border-border bg-white p-6">
            <h2 className="font-heading text-base font-bold text-navy">Course Details</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <div>
                  <dt className="font-medium text-navy">Duration</dt>
                  <dd className="text-muted">{course.duration}</dd>
                </div>
              </div>
              <div>
                <dt className="font-medium text-navy">Training Mode</dt>
                <dd className="mt-1 text-muted">{course.trainingMode}</dd>
              </div>
              <div>
                <dt className="font-medium text-navy">Requirements</dt>
                <dd className="mt-1 text-muted">{course.requirements?.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-medium text-navy">Fees</dt>
                <dd className="mt-1 text-muted">{course.fees}</dd>
              </div>
              {course.examBookingInfo && (
                <div>
                  <dt className="font-medium text-navy">Exam Booking</dt>
                  <dd className="mt-1 text-muted">{course.examBookingInfo}</dd>
                </div>
              )}
            </dl>
            <Link href="/contact" className="mt-6 block">
              <Button className="w-full">Enquire Now</Button>
            </Link>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
