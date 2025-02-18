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
