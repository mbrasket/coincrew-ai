// File: src/app/layout.tsx

import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { AppLayout } from '@/components/layout/AppLayout'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coincrew AI',
  description: 'Crypto intelligence platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} h-full bg-background text-foreground`}>
        <ThemeProvider>
          <AuthProvider>
            <TooltipProvider>
              <AppLayout>{children}</AppLayout>
            </TooltipProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
