import { useState } from "react"
import ReactDOM from "react-dom"
import { NonBlockingModalProps } from "./type"
import { useDraggable } from "../../../hooks/useDraggable"
import SideMenu from "./sideMenu/sideMenu"

const NonBlockingModal = ({ isOpen, onClose, children, userInfo }: NonBlockingModalProps) => {
    const [isMinimized, setIsMinimized] = useState(false)
    const [isSelectedMenuIndex, setIsSelectedMenuIndex] = useState(true)
    const minimizedArea = document.getElementById("minimized-area")
    const container = isMinimized && minimizedArea ? minimizedArea : document.body

    const { position, isDragging, dragRef, dropRef } = useDraggable({ x: 580, y: 60 })

    if (!isOpen) return null

    return ReactDOM.createPortal(
        isMinimized ? (
            <div className="flex items-center cursor-pointer" onClick={() => setIsMinimized(false)}>
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm">
                    <div className="w-[30%] h-12 bg-[#e2e2e2] rounded-l-lg shadow-md"></div>
                </div>
            </div>
        ) : (
            <div
                ref={dropRef}
                className=" w-full fixed inset-0 z-50 bg-transparent pointer-events-none"
                style={{
                    left: position.x,
                    top: position.y,
                    opacity: isDragging ? "0" : "1",
                }}
            >
                <div
                    ref={dragRef}
                    className=" w-[780px] h-[680px] absolute flex flex-row bg-white shadow-lg rounded-lg pointer-events-auto"
                >
                    <SideMenu
                        userInfo={userInfo}
                        onClose={onClose}
                        isMinimized={isMinimized}
                        setIsMinimized={setIsMinimized}
                        isSelected={isSelectedMenuIndex}
                        setIsSelected={setIsSelectedMenuIndex}
                    />
                    <div>{children}</div>
                </div>
            </div>
        ),
        container,
    )
}

export default NonBlockingModal
