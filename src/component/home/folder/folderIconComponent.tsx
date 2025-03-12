import { useDrag } from "react-dnd"
import { FolerIconComponentProps } from "../type"
import { useState } from "react"
import NonBlockingModal from "../../common/modal/nonBlockingModal"
import FolderView from "./folderView"
import UserInfo from "../userInfo/userInfo"
import Project from "../project/project"
import { useUserInfo } from "../../../hooks/useUserInfo"

const ITEM_TYPE = "FOLDER_ICON"

const FolderIconComponent = ({ position, name }: FolerIconComponentProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { data } = useUserInfo()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ITEM_TYPE,
        item: { name: name, x: position.x, y: position.y },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    const handleOpen = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            <div
                ref={drag}
                className={`absolute flex flex-col items-center w-20 h-16 cursor-pointer ${isDragging ? "opacity-50" : ""}`}
                style={{
                    left: position.x,
                    top: position.y,
                }}
                onClick={handleOpen}
            >
                <img src="/assets/icon/folderIcon.svg" alt="Foler" />
                <p>{name}</p>
            </div>
            <NonBlockingModal userInfo={data} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type={name}>
                {name === "kimjinsol" && <UserInfo />}
                {name === "projects" && <Project />}
                {name === "mobi" && <FolderView />}
            </NonBlockingModal>
        </>
    )
}

export default FolderIconComponent
