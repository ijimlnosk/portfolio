import { useEffect, useState } from "react"
import { useDrop } from "react-dnd"
import { folderData } from "../constants/folderPosition"

const ITEM_TYPE = "FOLDER_ICON"

export const useFolderPositions = () => {
    const [positions, setPositions] = useState(() =>
        folderData.map(folder => ({ name: folder.name, x: folder.InitialPositions.x, y: folder.InitialPositions.y })),
    )

    useEffect(() => {
        const updatePositions = () => {
            setPositions(prev =>
                prev.map(pos => ({
                    ...pos,
                    x: Math.max(0, Math.min(window.innerWidth - 100, pos.x)),
                    y: Math.max(0, Math.min(window.innerHeight - 50, pos.y)),
                })),
            )
        }

        window.addEventListener("resize", updatePositions)
        return () => window.removeEventListener("resize", updatePositions)
    }, [])

    useEffect(() => {
        setPositions(prev =>
            prev.map((pos, index) => ({
                ...pos,
                x: window.innerWidth - 100,
                y: 100 + index * 120,
            })),
        )
    }, [])

    const [, drop] = useDrop(() => ({
        accept: ITEM_TYPE,
        drop: (item: { name: string }, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset()
            if (!delta) return

            setPositions(prev =>
                prev.map(pos =>
                    pos.name === item.name
                        ? {
                              ...pos,
                              x: Math.max(0, Math.min(window.innerWidth - 100, pos.x + delta.x)),
                              y: Math.max(0, Math.min(window.innerHeight - 50, pos.y + delta.y)),
                          }
                        : pos,
                ),
            )
        },
    }))

    return { positions, drop }
}
