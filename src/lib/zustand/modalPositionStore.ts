import { create } from "zustand"
import { ModalPositionState } from "./type"

export const useModalPositionStore = create<ModalPositionState>(set => ({
    positions: {},
    setPosition: (id, position) =>
        set(state => ({
            positions: { ...state.positions, [id]: position },
        })),
}))
