export type SelectedViewState = {
    selectedView: "userInfo" | "skillsAndTools"
    setSelectedView: (view: "userInfo" | "skillsAndTools") => void
}
