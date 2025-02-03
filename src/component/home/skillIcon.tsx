import { useDrag, useDrop } from "react-dnd"
import { ITEM_TYPE } from "../../constants/skills"
import { SkillIconProps } from "./type"

const SkillIcon: React.FC<SkillIconProps> = ({ skill, index, moveSkill }) => {
    const [, ref] = useDrag({
        type: ITEM_TYPE,
        item: { index },
    })

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover: (draggedItem: { index: number }) => {
            if (draggedItem.index !== index) {
                moveSkill(draggedItem.index, index)
                draggedItem.index = index
            }
        },
    })

    return (
        <div
            ref={node => ref(drop(node))}
            className="p-2 m-1 bg-gray-200 rounded-lg cursor-pointer hover:scale-110 transition"
        >
            <img src={skill.icon} alt={skill.title} className="w-12 h-12" />
        </div>
    )
}

export default SkillIcon
