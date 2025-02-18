import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Evan's Portfolio",
  description: "Personal portfolio showcasing my work and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-200`}>
        <ThemeProvider>
          <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}