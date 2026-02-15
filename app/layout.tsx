import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Providers";

export const metadata: Metadata = {
  title: "OptixPathway - Your Trusted Pathway to Study in the UK",
  description:
    "From course selection to visa success — we guide international and UK students every step of the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
