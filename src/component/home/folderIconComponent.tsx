import { useDrag } from "react-dnd"
import { FolerIconComponentProps } from "./type"

const ITEM_TYPE = "FOLDER_ICON"

const FolderIconComponent = ({ position, setPosition, name }: FolerIconComponentProps) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ITEM_TYPE,
        item: { position },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    return (
        <div
            ref={drag}
            className={`absolute flex flex-col items-center w-20 h-16 cursor-pointer ${isDragging ? "opacity-50" : ""}`}
            style={{
                left: position.x,
                top: position.y,
            }}
        >
            <img src="/assets/icon/folderIcon.svg" alt="Foler" />
            <p>{name}</p>
        </div>
    )
}

export default FolderIconComponent
