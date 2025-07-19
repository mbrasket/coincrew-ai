// File: src/components/toolbar/ToolbarButton.tsx

'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

interface ToolbarButtonProps extends React.ComponentProps<typeof Button> {
  icon: React.ReactNode
  tooltip?: string
  contextMenuItems?: { label: string; onSelect: () => void }[]
}

export function ToolbarButton({
  icon,
  tooltip,
  contextMenuItems,
  className,
  ...props
}: ToolbarButtonProps) {
  const button = (
    <Button
      className={cn('p-2 rounded-md', className)}
      {...props}
      aria-label={tooltip}
    >
      {icon}
    </Button>
  )

  if (contextMenuItems && contextMenuItems.length > 0) {
    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>{button}</ContextMenuTrigger>
        <ContextMenuContent>
          {contextMenuItems.map(({ label, onSelect }, i) => (
            <ContextMenuItem key={i} onSelect={onSelect}>
              {label}
            </ContextMenuItem>
          ))}
        </ContextMenuContent>
      </ContextMenu>
    )
  }

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side="right">{tooltip}</TooltipContent>
      </Tooltip>
    )
  }

  return button
}
