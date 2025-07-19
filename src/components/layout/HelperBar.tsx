// File: src/components/layout/HelperBar.tsx

'use client'

import React from 'react'
import { ToolbarButton } from '@/components/toolbar/ToolbarButton'
import { Sparkles } from 'lucide-react'

export function HelperBar() {
  return (
    <nav
      aria-label="Tools"
      className="flex flex-col items-center w-14 p-2 bg-card border-l border-border space-y-2"
    >
      <ToolbarButton icon={<Sparkles size={20} />} tooltip="AI Assistant" />
    </nav>
  )
}
