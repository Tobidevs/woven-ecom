import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/navbar";

export const metadata: Metadata = {
  title: "WovenApparel",
  description: "buy christian clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
