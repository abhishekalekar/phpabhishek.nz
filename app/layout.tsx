import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "phpabhishek - Salesforce Consulting Services",
  description: "Expert Salesforce consulting to optimize your CRM, automate workflows, and maximize ROI.",
  icons: {
    icon: "/favicon.ico",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="me" href="https://techhub.social/@abhishekalekar" />
        <link rel="me" href="https://www.threads.com/@abhishekalekar" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
