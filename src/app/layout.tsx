import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Air Temp Air Conditioning And Heating | Ontario, CA",
  description:
    "Family-owned HVAC company serving Ontario, CA and the Inland Empire for 25 years. AC repair, heating service, and new system installation. Call (909) 957-3938.",
  metadataBase: new URL("https://air-temp-ac.vercel.app"),
  openGraph: {
    title: "Air Temp Air Conditioning And Heating | Ontario, CA",
    description:
      "Family-owned HVAC company serving Ontario, CA and the Inland Empire for 25 years. AC repair, heating service, and new system installation. Call (909) 957-3938.",
    url: "https://air-temp-ac.vercel.app",
    siteName: "Air Temp AC & Heating",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Air Temp Air Conditioning And Heating – Ontario, CA",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Temp Air Conditioning And Heating | Ontario, CA",
    description:
      "Family-owned HVAC company serving Ontario, CA and the Inland Empire for 25 years. AC repair, heating service, and new system installation.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>{children}</body>
    </html>
  );
}
