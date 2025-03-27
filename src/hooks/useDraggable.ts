import { useEffect } from "react"
import { DraggableData } from "react-draggable"
import { useModalPositionStore } from "../lib/zustand/modalPositionStore"

export const useDraggable = (id: string, initialPosition: { x: number; y: number }) => {
    const { positions, setPosition } = useModalPositionStore()

    const position = positions[id] || initialPosition

    useEffect(() => {
        if (!positions[id]) {
            setPosition(id, initialPosition)
        }
    }, [id, setPosition])

    const handleDrag = (_: any, data: DraggableData) => {
        requestAnimationFrame(() => {
            setPosition(id, { x: data.x, y: data.y })
        })
    }

    const handleStop = (_: any, data: DraggableData) => {
        const newPosition = { x: data.x, y: data.y }
        setPosition(id, newPosition)
    }

    return { position, handleDrag, handleStop }
}
