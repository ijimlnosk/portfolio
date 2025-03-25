import { create } from "zustand"
import { ModalState } from "./type"

export const useModalStore = create<ModalState>(set => ({
    activeModalId: null,
    setActiveModal: id => set({ activeModalId: id }),
}))
