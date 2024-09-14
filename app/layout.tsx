import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import "./globalsUI.css";
import "./mediaquery.css";

const Open_Sans_font = Open_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700','800'],
  variable: '--font-Open_Sans'
});

export const metadata: Metadata = {
  title: "WebFrontiers🕸️",
  description: "WebFrontiers: The AI-powered image editor revolutionizing creativity with intuitive controls and unparalleled design precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      variables: { colorPrimary: '#c3b7df' }
    }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", Open_Sans_font.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
