import { ITEM_TYPE, Skills } from "../../constants/skills"
import { useDrop } from "react-dnd"
import { useRef, useState } from "react"
import { SkillsType } from "./type"
import DraggableItem from "./draggableItem"

const SkillMenu = () => {
    const [items, setItems] = useState<SkillsType[]>(Skills)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const [, drop] = useDrop(() => ({
        accept: ITEM_TYPE,
        drop: (item: SkillsType, monitor) => {
            console.log("드롭된 아이템:", item) // item이 제대로 전달되는지 확인
            if (!containerRef.current) return

            const containerBounds = containerRef.current.getBoundingClientRect()
            const dropResult = monitor.getClientOffset()

            if (dropResult) {
                const x = dropResult.x - containerBounds.left
                const y = 8

                const newItems = [...items]
                const droppedItemIndex = newItems.findIndex(i => i.id === item.id)

                console.log("드롭된 아이템 ID:", droppedItemIndex)
                console.log(
                    "아이템 배열의 ID:",
                    newItems.map(i => i.id),
                )

                if (droppedItemIndex !== -1) {
                    newItems[droppedItemIndex] = {
                        ...newItems[droppedItemIndex],
                        position: {
                            x: x,
                            y: y,
                        },
                    }

                    for (let i = droppedItemIndex + 1; i < newItems.length; i++) {
                        newItems[i] = {
                            ...newItems[i],
                            position: {
                                x: newItems[i].position.x + -40, // 각 아이템들의 x 좌표를 40씩 이동
                                y: newItems[i].position.y,
                            },
                        }
                    }

                    setItems(newItems)
                }
            }
        },
    }))

    return (
        <div className="w-full flex justify-center items-center fixed bottom-0">
            <div
                ref={node => {
                    drop(node)
                    containerRef.current = node
                }}
                className="w-[640px] h-12 py-2 bg-[#EAEEFA] rounded-lg flex flex-row relative justify-center items-center bottom-2 shadow-lg"
            >
                {items.map((item, index) => (
                    <DraggableItem
                        item={item}
                        key={index}
                        position={item.position} // 업데이트된 position 값 전달
                    />
                ))}
            </div>
        </div>
    )
}

export default SkillMenu
