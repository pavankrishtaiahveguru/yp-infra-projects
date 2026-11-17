import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export const metadata = {
  title: {
    default: "Yesupadam Infra Projects",
    template: "%s | Yesupadam Infra Projects",
  },
  description:
    "Yesupadam Infra Projects provides reliable civil, infrastructure, construction, maintenance, road, electrical, plumbing, HVAC, painting and drain line solutions for residential, corporate and commercial projects.",
  keywords: [
    "Yesupadam Infra Projects",
    "civil works",
    "infrastructure projects",
    "construction company",
    "road works",
    "building maintenance",
    "electrical works",
    "plumbing works",
    "HVAC works",
    "painting works",
    "drain line works",
    "Hyderabad",
    "Telangana",
  ],
  authors: [{ name: "Yesupadam Infra Projects" }],
  creator: "Yesupadam Infra Projects",
  publisher: "Yesupadam Infra Projects",
  metadataBase: new URL("https://yesupadaminfradevelop.com"),
  openGraph: {
    title: "Yesupadam Infra Projects",
    description:
      "Reliable civil, infrastructure, construction and maintenance solutions.",
    siteName: "Yesupadam Infra Projects",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yesupadam Infra Projects",
    description:
      "Reliable civil, infrastructure, construction and maintenance solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh w-full flex-col">
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="w-full flex-1">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
