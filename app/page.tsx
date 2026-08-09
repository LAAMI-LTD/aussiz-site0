import { Hero } from "@/components/home/Hero";
import { Partnership } from "@/components/home/Partnership";
import { CourseHighlights } from "@/components/home/CourseHighlights";
import { WhyAussiz } from "@/components/home/WhyAussiz";
import { LearningJourney } from "@/components/home/LearningJourney";
import { FacilitatorsPreview } from "@/components/home/FacilitatorsPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Partnership />
      <CourseHighlights />
      <WhyAussiz />
      <LearningJourney />
      <FacilitatorsPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
