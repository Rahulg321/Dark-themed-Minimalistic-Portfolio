import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { poppins, montserrat, syne } from "./Fonts";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    <html
      lang="en"
      suppressHydrationWarning
      className={clsx(montserrat.variable, poppins.variable, syne.variable)}
    >
      <body
        className={clsx("min-h-screen bg-background font-sans antialiased")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <div className="narrow-container block-space-large">
              {/* <Header /> */}
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-DENGLRLTGH" />
    </html>
  );
}
