export type SelectedViewState = {
    selectedView: "userInfo" | "skillsAndTools"
    setSelectedView: (view: "userInfo" | "skillsAndTools") => void
}

export type ProjectState = {
    page: number
    setPage: (page: number) => void
    nextPage: (dataLength: number) => void
    prevPage: () => void
}

export type ModalState = {
    activeModalId: string | null
    setActiveModal: (id: string) => void
}

export type ModalPositionState = {
    positions: Record<string, { x: number; y: number }>
    setPosition: (id: string, position: { x: number; y: number }) => void
}
