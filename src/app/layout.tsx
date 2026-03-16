import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mieks & Match | Your Go-To for Au Pairs, Tutors & More",
  description:
    "Find trusted Au Pairs, Tutors, Chauffeurs, and more in Stellenbosch. Mieks & Match connects you with vetted service providers for all your household and personal needs.",
  keywords: [
    "au pair",
    "tutors",
    "chauffeur",
    "house sitters",
    "pet sitters",
    "Stellenbosch",
    "service booking",
    "marketplace",
  ],
  authors: [{ name: "Mieks & Match" }],
  openGraph: {
    title: "Mieks & Match | Your Go-To for Au Pairs, Tutors & More",
    description:
      "Find trusted Au Pairs, Tutors, Chauffeurs, and more in Stellenbosch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blush text-text">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
