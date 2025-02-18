import { create } from "zustand"
import { ProjectState } from "./type"

export const useProjectStore = create<ProjectState>((set, get) => ({
    page: 0,
    setPage: (page: number) => set({ page }),
    nextPage: (dataLength: number) => {
        const { page } = get()
        if (page < dataLength - 1) {
            set({ page: page + 1 })
        } else {
            alert("마지막 페이지입니다.")
        }
    },
    prevPage: () => {
        const { page } = get()
        if (page > 0) {
            set({ page: page - 1 })
        } else {
            alert("첫 페이지입니다.")
        }
    },
}))
