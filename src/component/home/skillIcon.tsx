import { SkillIconProps } from "./type"
import SkillTitleView from "./skillTitleView"
import { useDragAndDropSkill } from "../../hooks/useDragAndDropSkill"
import { motion } from "framer-motion"
import { useState } from "react"

const SkillIcon = ({ skill, index, moveSkill }: SkillIconProps) => {
    const { isDragging, dragDropRef } = useDragAndDropSkill({ index, moveSkill, skill })
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
        setTimeout(() => setIsClicked(false), 500)
    }

    return (
        <>
            <motion.div
                ref={dragDropRef}
                onClick={handleClick}
                animate={isClicked ? { y: [-5, -150, 0] } : {}}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`group relative p-1.5 m-1 rounded-lg cursor-pointer transition ${isDragging ? "opacity-0" : "opacity-100"}`}
            >
                <img src={skill.icon} alt={skill.title} className="w-10 h-10" />
                <SkillTitleView skillTitle={skill.title} />
            </motion.div>
        </>
    )
}

export default SkillIcon
