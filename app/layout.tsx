import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sugiono.my.id"),
  title: {
    default: "Sugiono | Backend Web Developer",
    template: "%s | Sugiono",
  },
  description:
    "Portfolio Sugiono, Backend Web Developer, Laravel Developer, dan Fullstack Developer dari Jakarta, Indonesia.",
  keywords: [
    "Sugiono",
    "Backend Web Developer",
    "Laravel Developer",
    "Fullstack Developer",
    "Jakarta Developer",
    "Portfolio Sugiono",
  ],
  openGraph: {
    title: "Sugiono | Backend Web Developer",
    description:
      "Backend-first portfolio for Sugiono featuring Laravel, fullstack delivery, and enterprise web systems.",
    url: "https://sugiono.my.id",
    siteName: "Sugiono Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugiono | Backend Web Developer",
    description:
      "Backend-first portfolio for Sugiono featuring Laravel, fullstack delivery, and enterprise web systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-slate-950 text-slate-100"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
