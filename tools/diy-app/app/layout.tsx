import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  const protocol = headerList.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Budget Mini UAV — DIY STEM Hardware Studio",
    description: "Thiết kế Budget Mini UAV với BOM, wiring, CAD 3D, hướng dẫn lắp ráp và gói dự án hoàn chỉnh.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Budget Mini UAV — DIY STEM",
      description: "30 parts · Wiring · CAD · Build guide",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 804, alt: "DIY STEM Hardware Studio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Budget Mini UAV — DIY STEM",
      description: "30 parts · Wiring · CAD · Build guide",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={geistSans.variable}>{children}</body></html>;
}
