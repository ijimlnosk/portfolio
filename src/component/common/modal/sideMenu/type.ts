import { getUserInfoResponse } from "../../../../api/type"

export type UserProfileProps = {
    userInfo: getUserInfoResponse
    isSelected: boolean
    setIsSelected: (isSelected: boolean) => void
}

export type SettingSideMenuProps = {
    userInfo?: getUserInfoResponse
    onClose: () => void
    isMinimized: boolean
    setIsMinimized: (isMinimized: boolean) => void
    isSelected: boolean
    setIsSelected: (isSelected: boolean) => void
}

export type PersonalInfoProps = {
    userInfo: getUserInfoResponse
}

export type InfoItemProps = {
    icon: string
    alt: string
    children: React.ReactNode
}
