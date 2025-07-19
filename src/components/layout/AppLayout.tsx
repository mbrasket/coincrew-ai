// File: src/components/layout/AppLayout.tsx

'use client'

import React from 'react'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import 'react-reflex/styles.css'
import { useLayoutStore } from '@/store/layoutStore'
import { AppBar } from '@/components/layout/AppBar'
import { HelperBar } from '@/components/layout/HelperBar'
import { Panel } from './Panel'
import { TooltipProvider } from '@/components/ui/tooltip'

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { navSize, helperSize, setNavSize, setHelperSize } = useLayoutStore()

  return (
    <TooltipProvider>
      <div className="flex h-screen">
        <AppBar>
          {/* TODO: Insert nav icons */}
        </AppBar>

        <ReflexContainer orientation="vertical" className="flex-1 flex">
          <ReflexElement
            size={navSize}
            minSize={220}
            maxSize={400}
            onStopResize={setNavSize}
            className="flex flex-col border-r border-border bg-card"
          >
            <Panel id="AppNavPanel">
              {/* TODO: NavPanelHeader & NavPanelContent */}
              <div className="p-4 text-muted-foreground">Navigation Panel</div>
            </Panel>
          </ReflexElement>

          <ReflexSplitter />

          <ReflexElement className="flex flex-col" style={{ flex: 1 }}>
            <ReflexContainer orientation="vertical" className="flex-1 flex">
              <ReflexElement className="flex flex-col overflow-auto bg-background">
                <Panel id="Main">
                  {/* TODO: MainContentHeader */}
                  {children}
                </Panel>
              </ReflexElement>

              <ReflexSplitter />

              <ReflexElement
                size={helperSize}
                minSize={250}
                maxSize={500}
                onStopResize={setHelperSize}
                className="flex flex-col border-l border-border bg-card"
              >
                <Panel id="HelperPanel">
                  {/* TODO: HelperPanelHeader & HelperPanelContent */}
                  <div className="p-4 text-muted-foreground">Helper Panel</div>
                </Panel>
              </ReflexElement>
            </ReflexContainer>
          </ReflexElement>
        </ReflexContainer>

        <HelperBar>
          {/* TODO: Insert tools icons */}
        </HelperBar>
      </div>
    </TooltipProvider>
  )
}
