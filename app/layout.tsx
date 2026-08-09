import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aussiz Education and Training | IELTS, PTE, ICT & Professional Training",
    template: "%s | Aussiz Education and Training",
  },
  description:
    "Aussiz Education and Training provides IELTS and PTE preparation, exam booking support, computer and ICT training, German language training, Nurse Aide, Caregiving and Disability courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
