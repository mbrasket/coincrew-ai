import React from 'react'

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  children?: React.ReactNode
}

export function Panel({ id, children, className, ...props }: PanelProps) {
  return (
    <section
      id={id}
      className={`${className || ''}`}
      {...props}
    >
      {children}
    </section>
  )
}
