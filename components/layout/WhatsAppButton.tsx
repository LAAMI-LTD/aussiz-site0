import { getWhatsAppLink } from "@/data/site";

export function WhatsAppButton() {
  const link = getWhatsAppLink("Hi Aussiz, I'd like to know more about your courses.");
  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Aussiz on WhatsApp"
      className="focus-ring fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white shadow-lg transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35c1.36.71 2.9 1.12 4.52 1.12h.01c5.46 0 9.91-4.45 9.91-9.91C21.86 6.45 17.5 2 12.04 2zm5.79 14.02c-.24.68-1.4 1.31-1.94 1.39-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.13.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.16-.3.36-.43.49-.14.14-.29.29-.13.57.17.28.75 1.23 1.6 1.99 1.1.98 2.03 1.29 2.31 1.43.28.14.44.12.6-.07.17-.19.71-.83.9-1.12.19-.28.38-.24.64-.14.26.1 1.66.78 1.94.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
      </svg>
    </a>
  );
}
