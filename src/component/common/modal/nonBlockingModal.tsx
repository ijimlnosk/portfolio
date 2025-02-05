import { useState } from "react"
import ReactDOM from "react-dom"
import Minimized from "./minimized"
import Close from "./close"
import { NonBlockingModalProps } from "./type"
import { useDraggable } from "../../../hooks/useDraggable"

const NonBlockingModal = ({ isOpen, onClose, children }: NonBlockingModalProps) => {
    const [isMinimized, setIsMinimized] = useState(false)
    const minimizedArea = document.getElementById("minimized-area")
    const container = isMinimized && minimizedArea ? minimizedArea : document.body

    const { position, isDragging, dragRef, dropRef } = useDraggable({ x: 200, y: 200 })

    console.log(position)

    if (!isOpen) return null

    return ReactDOM.createPortal(
        isMinimized ? (
            <div className="flex items-center cursor-pointer" onClick={() => setIsMinimized(false)}>
                최소화 됨
            </div>
        ) : (
            <div
                ref={dropRef}
                className="fixed inset-0 z-50 bg-transparent pointer-events-none"
                style={{
                    left: position.x,
                    top: position.y,
                    opacity: isDragging ? "0" : "1",
                }}
            >
                <div ref={dragRef} className=" absolute p-4 bg-white shadow-lg rounded-lg pointer-events-auto">
                    <div className="flex flex-row gap-2 ">
                        <Close onClose={onClose} />
                        <Minimized isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        ),
        container,
    )
}

export default NonBlockingModal
