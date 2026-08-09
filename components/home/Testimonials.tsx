import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            What Our Students Say
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col p-6">
                <Quote className="h-6 w-6 text-orange" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {testimonial.quote}
                </p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.course}</p>
                  {testimonial.isPlaceholder && (
                    <p className="mt-2 text-[11px] italic text-muted/80">
                      Sample testimonial — replace with verified student feedback.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
