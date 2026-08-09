export interface Course {
  slug: string;
  name: string;
  category: string;
  categoryFilter: "language" | "ict" | "healthcare";
  featured: boolean;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  ctaLabel: string;
  overview?: string;
  whoItsFor?: string[];
  learningOutcomes?: string[];
  duration?: string;
  modules?: string[];
  requirements?: string[];
  trainingMode?: string;
  fees?: string;
  examBookingInfo?: string;
  faqs?: { question: string; answer: string }[];
}

export interface Facilitator {
  id: string;
  name: string;
  role: string;
  specialization: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  quote: string;
  isPlaceholder: boolean;
}
