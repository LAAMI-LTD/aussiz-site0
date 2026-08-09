"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionSingle({ items }: { items: AccordionItemProps[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-navy">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted transition-transform",
                  isOpen && "rotate-180 text-orange"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm text-muted">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
