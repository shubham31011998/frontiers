import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import "./globalsUI.css";

const Open_Sans_font = Open_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700','800'],
  variable: '--font-Open_Sans'
});

export const metadata: Metadata = {
  title: "Frontiers",
  description: "Frontiers: The AI-powered image editor revolutionizing creativity with intuitive controls and unparalleled design precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      variables: { colorPrimary: '#624cf5' }
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
