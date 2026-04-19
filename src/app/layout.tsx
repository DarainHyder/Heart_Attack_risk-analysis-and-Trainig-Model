import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura | Precise Heart Risk Analysis",
  description: "Advanced heart attack risk prediction using localized clinical data and optimized machine learning models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-glow" />
        {children}
      </body>
    </html>
  );
}
