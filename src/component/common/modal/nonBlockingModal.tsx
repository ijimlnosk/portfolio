import { useId, useState } from "react"
import ReactDOM from "react-dom"
import { NonBlockingModalProps } from "./type"
import { useDraggable } from "../../../hooks/useDraggable"
import SideMenu from "./sideMenu/sideMenu"
import { useSelectedViewStore } from "../../../lib/zustand/selectedViewStore"
import Draggable from "react-draggable"
import { useModalStore } from "../../../lib/zustand/modalStore"

const NonBlockingModal = ({ isOpen, onClose, children, userInfo, skillTitle, type }: NonBlockingModalProps) => {
    const modalId = useId()
    const [isMinimized, setIsMinimized] = useState(false)
    const { selectedView, setSelectedView } = useSelectedViewStore()
    const { activeModalId, setActiveModal } = useModalStore()
    const minimizedArea = document.getElementById("minimized-area")
    const container = isMinimized && minimizedArea ? minimizedArea : document.body

    const { position, handleDrag, handleStop } = useDraggable(modalId, { x: 350, y: 60 })

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
                className=" w-full fixed inset-0 z-50 bg-transparent pointer-events-none"
                style={{
                    zIndex: activeModalId === modalId ? 1000 : 999,
                }}
                onMouseDown={() => setActiveModal(modalId)}
            >
                <Draggable bounds="parent" position={position} onDrag={handleDrag} onStop={handleStop}>
                    <div
                        className={`h-[84vh] ${skillTitle === "Project" ? "max-w-[1320px] xl:w-[1520px]" : type === "folder" ? "w-[920px] max-h-[700px]" : "w-[820px]"} absolute flex flex-row shadow-lg rounded-lg  pointer-events-auto`}
                    >
                        <SideMenu
                            userInfo={userInfo}
                            onClose={onClose}
                            isMinimized={isMinimized}
                            setIsMinimized={setIsMinimized}
                            selectedView={selectedView}
                            setSelectedView={setSelectedView}
                            type={type}
                        />
                        <div className="flex-1 max-w-[1080px] xl:maxw-[1280px]">{children}</div>
                    </div>
                </Draggable>
            </div>
        ),
        container,
    )
}

export default NonBlockingModal
