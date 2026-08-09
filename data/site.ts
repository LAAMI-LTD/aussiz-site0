// Centralized site configuration. Replace placeholders with verified business
// information — never invent contact details, socials, or partnership claims.

export const siteConfig = {
  name: "Aussiz Education & Training",
  tagline: "Your Goals Are Our Goals — And Your Success Is Our Success.",
  description:
    "Aussiz Education & Training provides IELTS and PTE preparation and exam booking support, computer and ICT training, German language training, Nurse Aide, Caregiving and Disability training.",

  contact: {
    phone: "[Phone Number]",
    email: "[Email Address]",
    location: "[Physical Location]",
    whatsappNumber: "", // e.g. "254700000000" — leave empty until confirmed, disables WhatsApp CTA
  },

  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
    linkedin: "",
  },

  partnership: {
    name: "British Council",
    statement: "In partnership with the British Council",
    trustBadge: "Approved IELTS Test Centre",
  },
} as const;

export function getWhatsAppLink(prefilledMessage?: string) {
  if (!siteConfig.contact.whatsappNumber) return null;
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  return prefilledMessage ? `${base}?text=${encodeURIComponent(prefilledMessage)}` : base;
}
