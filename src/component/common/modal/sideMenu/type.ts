import { getUserInfoResponse } from "../../../../api/type"

export type UserProfileProps = {
    userInfo: getUserInfoResponse
    selectedView: "userInfo" | "skillsAndTools"
    setSelectedView: (selectedView: "userInfo" | "skillsAndTools") => void
}

export type SettingSideMenuProps = {
    userInfo?: getUserInfoResponse
    onClose: () => void
    isMinimized: boolean
    setIsMinimized: (isMinimized: boolean) => void
    selectedView: "userInfo" | "skillsAndTools"
    setSelectedView: (selectedView: "userInfo" | "skillsAndTools") => void
    skillTitle: string
}

export type PersonalInfoProps = {
    userInfo: getUserInfoResponse
    selectedView: "userInfo" | "skillsAndTools"
    setSelectedView: (selectedView: "userInfo" | "skillsAndTools") => void
}

export type InfoItemProps = {
    icon: string
    alt: string
    children: React.ReactNode
    selectedView?: "userInfo" | "skillsAndTools"
    setSelectedView?: (selectedView: "userInfo" | "skillsAndTools") => void
}

export type UserInfoSideMenuProps = {
    userInfo: getUserInfoResponse
    selectedView: "userInfo" | "skillsAndTools"
    setSelectedView: (selectedView: "userInfo" | "skillsAndTools") => void
}
