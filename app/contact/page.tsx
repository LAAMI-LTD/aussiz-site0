import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aussiz Education and Training about our courses, training schedules or exam booking.",
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: "[Phone Number]" },
  { icon: Mail, label: "Email", value: "[Email Address]" },
  { icon: MapPin, label: "Location", value: "[Physical Location]" },
  { icon: MessageCircle, label: "WhatsApp", value: "[WhatsApp Number]" },
];

export default function ContactPage() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-bold text-navy sm:text-5xl">
            Contact Aussiz
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Have questions about our courses, training schedules or exam booking?
            Get in touch with our team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-lg border border-border bg-white p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-navy">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
