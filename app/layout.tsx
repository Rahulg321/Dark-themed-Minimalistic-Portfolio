import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider";
import { montserrat, syne } from "./Fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/toaster";
import DialogNavBar from "@/components/DialogNavBar";

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
  // <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={clsx(montserrat.variable, syne.variable)}
    >
      <body
        className={clsx(
          "min-h-screen bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="">
            <div className="hidden md:fixed z-30 md:top-2 md:left-2 p-4">
              <DialogNavBar />
            </div>

            <div className="narrow-container block-space-large">{children}</div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-DENGLRLTGH" />
    </html>
  );
}
