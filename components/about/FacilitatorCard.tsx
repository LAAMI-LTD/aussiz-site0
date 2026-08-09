import Image from "next/image";
import type { Facilitator } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

export function FacilitatorCard({ facilitator }: { facilitator: Facilitator }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square w-full">
        <Image
          src={facilitator.image}
          alt={`Photo of ${facilitator.name}`}
          fill
          sizes="(min-width: 1024px) 22vw, 45vw"
          className="object-cover"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="font-heading text-base font-bold text-navy">{facilitator.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-orange">{facilitator.role}</p>
        <p className="mt-2 text-xs text-muted">{facilitator.specialization}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{facilitator.bio}</p>
      </CardContent>
    </Card>
  );
}
