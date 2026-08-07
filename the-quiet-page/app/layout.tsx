import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://the-quiet-page.vercel.app"),

  title: {
    default: "The Quiet Page",
    template: "%s | The Quiet Page",
  },

  description:
    "Reflections on faith, knowledge and life. Essays written slowly and published only when they are worth returning to.",

  keywords: [
    "Islam",
    "Reflections",
    "Faith",
    "Knowledge",
    "Essays",
    "The Quiet Page",
    "Writing",
  ],

  authors: [
    {
      name: "Fahad",
    },
  ],

  creator: "Fahad",

  openGraph: {
    title: "The Quiet Page",
    description:
      "Reflections on faith, knowledge and life.",

    url: "https://the-quiet-page.vercel.app",

    siteName: "The Quiet Page",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Quiet Page",
    description:
      "Reflections on faith, knowledge and life.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}