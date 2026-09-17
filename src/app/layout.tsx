// src/app/layout.tsx
import type { Metadata } from "next"
import { Hanken_Grotesk, Newsreader } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"

const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const display = Newsreader({ subsets: ["latin"], variable: "--font-display", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://evanzhang.net"),
  title: "Evan Zhang | Business Analyst / Product Manager / Consulting",
  description:
    "Evan Zhang works between clients and engineering teams: requirements, product delivery, and analysis, most recently on core banking platforms at FIS. MS in Management candidate at Georgia Tech's Scheller College of Business.",
  openGraph: {
    title: "Evan Zhang | Business Analyst / Product Manager / Consulting",
    description: "I turn what banks ask for into what engineers ship.",
    url: "https://evanzhang.net",
    type: "website",
  },
}

// Runs before first paint so the stored (or system) theme never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})()`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${display.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main" className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
