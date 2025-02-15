import { create } from "zustand"
import { SelectedViewState } from "./type"

export const useSelectedViewStore = create<SelectedViewState>(set => ({
    selectedView: "userInfo",
    setSelectedView: view => set({ selectedView: view }),
}))
