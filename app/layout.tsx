import type { Metadata } from "next";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import WarningText from "@/components/WarningText";
import localFont from "next/font/local";

const gilroy = localFont({
  variable: "--font-gilroy",
  display: "swap",
  preload: true,
  src: [
    {
      path: "./fonts/gilroy/GIP-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/GIP-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/GIP-UltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/GIP-UltraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/GIP-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/GIP-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/GIP-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/GIP-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/GIP-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/GIP-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/GIP-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/GIP-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/GIP-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/GIP-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/GIP-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/GIP-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/GIP-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/GIP-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/GIP-Heavy.otf",
      weight: "950",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/GIP-HeavyItalic.otf",
      weight: "950",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Сэндүра Мед цаг захиалга",
  description:
    "Сэндүра Мед - Монгол ардын эмнэлэгт цаг захиалах хамгийн хялбар арга. Сэндүра, сэндүра мед цаг, эмнэлэг, ардын эмнэлэг, монгол ардын эмнэлэг, цаг захиалга.",
  keywords: [
    "сэндүра",
    "сэндүра мед цаг",
    "сэндүра мед цаг захиалга",
    "эмнэлэг",
    "ардын эмнэлэг",
    "монгол ардын эмнэлэг",
    "цаг захиалах",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gilroy.variable} antialiased bg-gray-100 dark:bg-background text-desccolor dark:text-white `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <div className="flex flex-col gap-4">
              <Navbar />
              {children}
            </div>

            <Toaster />
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
