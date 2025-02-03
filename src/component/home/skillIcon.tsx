import { useDrag, useDrop } from "react-dnd"
import { ITEM_TYPE } from "../../constants/skills"
import { SkillIconProps } from "./type"
import { motion } from "framer-motion"

const SkillIcon: React.FC<SkillIconProps> = ({ skill, index, moveSkill }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: ITEM_TYPE,
        item: { index, skill },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, dropRef] = useDrop({
        accept: ITEM_TYPE,
        hover: (draggedItem: { index: number }) => {
            // 다른 index로 넘어왔을 때만 순서 변경
            if (draggedItem.index !== index) {
                moveSkill(draggedItem.index, index)
                // draggedItem의 index를 현재 index로 업데이트
                draggedItem.index = index
            }
        },
    })

    return (
        <motion.div
            layout
            className={`p-2 m-1 bg-gray-200 rounded-lg cursor-pointer transition ${isDragging ? "opacity-0" : "opacity-100"}`}
            transition={{
                layout: {
                    type: "spring",
                    duration: 0.5,
                    ease: "easeInOut",
                    bounce: 0.1,
                },
            }}
        >
            <img ref={node => dragRef(dropRef(node))} src={skill.icon} alt={skill.title} className="w-12 h-12" />
        </motion.div>
    )
}

export default SkillIcon
