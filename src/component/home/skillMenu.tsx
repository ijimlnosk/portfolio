import { useState } from "react"
import SkillIcon from "./skillIcon"
import { SkillsType } from "./type"
import { Skills } from "../../constants/skills"

const SkillMenu = () => {
    const [skills, setSkills] = useState<SkillsType[]>(Skills)

    const moveSkill = (fromIndex: number, toIndex: number) => {
        const updatedSkills = [...skills]
        const [movedItem] = updatedSkills.splice(fromIndex, 1)
        updatedSkills.splice(toIndex, 0, movedItem)
        setSkills(updatedSkills)
    }

    return (
        <div className="fixed bottom-2">
            <div className="flex bg-[#eaeefa] bg-opacity-80 p-1  rounded-2xl shadow-md">
                {skills.map((skill, index) => (
                    <SkillIcon key={skill.id} skill={skill} index={index} moveSkill={moveSkill} />
                ))}
            </div>
        </div>
    )
}

export default SkillMenu
