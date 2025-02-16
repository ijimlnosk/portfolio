import { SkillsAndToolsItem } from "../../api/type"

export type SkillDescriptionProps = {
    skills: SkillsAndToolsItem[]
}

const SkillDescription = ({ skills }: SkillDescriptionProps) => {
    return (
        <div className="w-full flex flex-row mt-4">
            {skills.map((skill, index) => (
                <div className=" mx-2 flex-center flex-row gap-1">
                    <div
                        key={index}
                        className="w-3 h-3 rounded-full flex-items flex-row"
                        style={{ backgroundColor: skill.bgColor }}
                    />
                    <div className="text-xs font-light">{skill.name}</div>
                </div>
            ))}
        </div>
    )
}
export default SkillDescription
