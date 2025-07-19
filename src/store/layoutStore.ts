import { create } from 'zustand'


interface LayoutState {
  navSize: number
  helperSize: number
  setNavSize: (size: number) => void
  setHelperSize: (size: number) => void
}

export const useLayoutStore = create<LayoutState>((set) => ({
  navSize: 280,
  helperSize: 320,
  setNavSize: (size) => set({ navSize: size }),
  setHelperSize: (size) => set({ helperSize: size }),
}))
