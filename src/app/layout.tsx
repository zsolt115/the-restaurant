import "../globals.scss";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "THE RESTAURANT",
  description: "Luxury food & dining experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
