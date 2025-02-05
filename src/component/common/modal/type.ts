export type NonBlockingModalProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export type MinimizedProps = {
    isMinimized: boolean
    setIsMinimized: (minimized: boolean) => void
}

export type CloseProps = {
    onClose: () => void
}
