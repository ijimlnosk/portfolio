import { getUserInfoResponse } from "../../../api/type"

export type NonBlockingModalProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    userInfo?: getUserInfoResponse
    skillTitle: string
}

export type MinimizedProps = {
    isMinimized: boolean
    setIsMinimized: (minimized: boolean) => void
}

export type CloseProps = {
    onClose: () => void
}
