import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Myocardial Risk Index | Precise Heart Risk Analysis",
  description: "Advanced cardiac event prediction using localized clinical data and optimized machine learning models.",
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
