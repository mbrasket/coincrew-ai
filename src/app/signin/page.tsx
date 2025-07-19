// File: src/app/signin/page.tsx

'use client'

import React from 'react'
import { GalleryVerticalEnd } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { SignInForm } from '@/components/auth/SignInForm'
import { SignUpForm } from '@/components/auth/SignUpForm'

export default function AuthPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>

        <Tabs defaultValue="signIn" className="mt-4">
          <TabsList>
            <TabsTrigger value="signIn">Sign In</TabsTrigger>
            <TabsTrigger value="signUp">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signIn" className="pt-6">
            <div className="w-full max-w-xs mx-auto">
              <SignInForm />
            </div>
          </TabsContent>

          <TabsContent value="signUp" className="pt-6">
            <div className="w-full max-w-xs mx-auto">
              <SignUpForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
