import { useState } from "react"
import { UseDraggableProps } from "./type"
import { useDrag, useDrop } from "react-dnd"

const ITEM_TYPE = "NON_BLOCKING_MODAL"

export const useDraggable = (initialPosition: UseDraggableProps) => {
    const [position, setPosition] = useState<UseDraggableProps>(initialPosition)

    const [{ isDragging }, dragRef] = useDrag({
        type: ITEM_TYPE,
        item: () => ({ x: position.x, y: position.y }),
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, dropRef] = useDrop({
        accept: ITEM_TYPE,
        hover: (item: UseDraggableProps, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset()
            if (!delta) return
            const newX = item.x + delta.x
            const newY = item.y + delta.y
            setPosition({ x: newX, y: newY })
        },
    })

    return { position, isDragging, dragRef, dropRef }
}
