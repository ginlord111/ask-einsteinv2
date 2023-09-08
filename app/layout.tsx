import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ask Einstein',
  description: 'AI Bot Generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        
        <link rel="icon" href="/einstein.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
