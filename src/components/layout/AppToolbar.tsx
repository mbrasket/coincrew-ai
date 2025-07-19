import React from 'react'

interface AppToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  position: 'left' | 'right'
  id: string
  children?: React.ReactNode
}

export function AppToolbar({ position, id, children, className, ...props }: AppToolbarProps) {
  const baseClasses = 'flex flex-col items-center bg-card border-border'
  const positionClasses = position === 'left' ? 'w-14 border-r' : 'w-14 border-l'

  return (
    <div
      id={id}
      className={`${baseClasses} ${positionClasses} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}
