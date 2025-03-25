import { useEffect, useState } from "react"
import { DraggableData } from "react-draggable"
import { useModalPositionStore } from "../lib/zustand/modalPositionStore"

export const useDraggable = (id: string, initialPosition: { x: number; y: number }) => {
    const { positions, setPosition } = useModalPositionStore()
    const [position, setPositionState] = useState(positions[id] || initialPosition)

    useEffect(() => {
        if (!positions[id]) {
            setPosition(id, initialPosition)
        }
    }, [id, positions, initialPosition, setPosition])

    const handleDrag = (e: any, data: DraggableData) => {
        setPositionState({ x: data.x, y: data.y })
    }

    const handleStop = (e: any, data: DraggableData) => {
        const newPosition = { x: data.x, y: data.y }
        setPosition(id, newPosition)
    }

    return { position, handleDrag, handleStop }
}
