import { useState } from "react"
import ReactDOM from "react-dom"
import Minimized from "./minimized"
import Close from "./close"
import { NonBlockingModalProps } from "./type"
import { useDrag, useDrop } from "react-dnd"

const ITEM_TYPE = "NON_BLOCKING_MODAL"

const NonBlockingModal = ({ isOpen, onClose, children }: NonBlockingModalProps) => {
    const [isMinimized, setIsMinimized] = useState(false)
    const [position, setPosition] = useState({ x: 200, y: 200 })
    const minimizedArea = document.getElementById("minimized-area")
    const container = isMinimized && minimizedArea ? minimizedArea : document.body

    const [{ isDragging }, dragRef] = useDrag({
        type: ITEM_TYPE,
        item: () => {
            return { x: position.x, y: position.y }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, dropRef] = useDrop({
        accept: ITEM_TYPE,
        hover: (item: { x: number; y: number }, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset()
            if (!delta) return
            const newX = item.x + delta.x
            const newY = item.y + delta.y
            setPosition({ x: newX, y: newY })
        },
    })
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
                style={{ left: position.x, top: position.y, opacity: isDragging ? "0" : "1" }}
            >
                <div ref={dragRef} className=" absolute w-72 p-4 bg-white shadow-lg rounded pointer-events-auto">
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
