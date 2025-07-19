// File: src/components/auth/AuthProvider.tsx

'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Session, User } from '@supabase/supabase-js'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setUser(data.session?.user ?? null)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [])

  async function signIn(email: string, password: string) {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    setLoading(false)
  }

  async function signOut() {
    setLoading(true)
    await supabase.auth.signOut()
    setUser(null)
    setSession(null)
    setLoading(false)
  }

  async function signUp(email: string, password: string) {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
