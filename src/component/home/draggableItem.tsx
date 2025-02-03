import { useDrag } from "react-dnd"
import { ITEM_TYPE } from "../../constants/skills"
import { DraggableItemProps } from "./type"

const DraggableItem = ({ item, position }: DraggableItemProps) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ITEM_TYPE,
        item: { id: item.id, item },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    return (
        <div
            ref={drag}
            className="mx-2 absolute"
            style={{
                opacity: isDragging ? 0.5 : 1,
                left: position?.x ?? 0, // position.x 값을 사용
                top: position?.y ?? 0, // position.y 값을 사용
            }}
        >
            <img src={item.icon} alt={item.title} />
        </div>
    )
}

export default DraggableItem
