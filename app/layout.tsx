import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { poppins, montserrat, syne, inter } from "./Fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/toaster";
import { ViewTransitions } from "next-view-transitions";
import TransitionProvider from "@/lib/store/transition-context";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://rahulguptadev.in"),
    title: {
      default: "Rahul Gupta Portfolio App",
      template: `%s | Rahul Gupta Portfolio App`,
    },
    description:
      "Rahul Gupta - Developer, Blogger, Gamer, Fitness Enthusiast. I build web projects, write about tech, and love freelancing. Explore my portfolio, blog posts, and get a glimpse into my passions for gaming and fitness!",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TransitionProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={clsx(
          montserrat.variable,
          poppins.variable,
          syne.variable,
          inter.variable
        )}
      >
        <body
          className={clsx(
            "min-h-screen bg-background font-sans dark antialiased"
          )}
        >
          <main className="relative">
            <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
              <div className="narrow-container block-space-large">
                {/* <Header /> */}
                {children}
              </div>
            </div>
          </main>
          <Toaster />
        </body>
        <GoogleAnalytics gaId="G-DENGLRLTGH" />
      </html>
    </TransitionProvider>
  );
}
