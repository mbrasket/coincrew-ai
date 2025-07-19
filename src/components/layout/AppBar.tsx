// File: src/components/layout/AppBar.tsx

'use client'

import React from 'react'
import { ToolbarButton } from '@/components/toolbar/ToolbarButton'
import {
  Home as HomeIcon,
  MessageSquare as DmsIcon,
  Bookmark as BookmarkIcon,
  BarChart2 as MarketsIcon,
  Bell as NotificationsIcon,
  ShoppingBag as StoreIcon,
  User as UserIcon,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function AppBar() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-col items-center w-14 p-2 bg-card border-r border-border space-y-2"
    >
      <ToolbarButton icon={<HomeIcon size={20} />} tooltip="Home" />
      <ToolbarButton icon={<DmsIcon size={20} />} tooltip="DMs" />
      <ToolbarButton icon={<BookmarkIcon size={20} />} tooltip="Watchlists" />
      <ToolbarButton icon={<MarketsIcon size={20} />} tooltip="Markets" />
      <ToolbarButton icon={<NotificationsIcon size={20} />} tooltip="Notifications" />
      <ToolbarButton icon={<StoreIcon size={20} />} tooltip="Store" />
      <Avatar className="mt-4 w-10 h-10">
        <AvatarImage src="/avatar.png" alt="User Avatar" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </nav>
  )
}
