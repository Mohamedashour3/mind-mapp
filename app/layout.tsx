import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/themeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mind Map - Mental Health Tracking & Support",
  description: "Track, understand, and improve your mental health with our AI-powered application.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

