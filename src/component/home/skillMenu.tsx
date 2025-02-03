import { useState } from "react"
import SkillIcon from "./skillIcon"
import { SkillsType } from "./type"
import { Skills } from "../../constants/skills"

const SkillMenu = () => {
    // Skills 상수 배열을 useState로 관리
    // 드래그 앤 드랍 시 순서가 바뀔 때, 상태를 업데이트하기 위함
    const [skills, setSkills] = useState<SkillsType[]>(Skills)

    // 드래그된 아이콘(fromIndex)를 뽑아서
    // 드랍된 위치(toIndex)에 삽입 -> 배열 순서 변경
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
