import SkillDescription from "./skillDescription"
import { SkillsViewProps } from "./type"

const SkillsView = ({ data, layout = "vertical" }: SkillsViewProps) => {
    const isHorizontal = layout == "horizontal"
    const containerClass = isHorizontal ? "w-full flex flex-row gap-2" : ""

    return (
        <div className={containerClass}>
            {Object.keys(data).map(category => {
                const skills = data[category]
                if (!skills) return null
                return (
                    <div className="w-full bg-[#f7f7f7] border-[1px] border-[#e2e2e2] rounded-md my-2 px-4 py-2 ">
                        <div key={category}>
                            <div className="w-full text-md mb-4">{category}</div>
                            <div className="w-full bg-[#d9d9d9] flex flex-row rounded-md">
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className={`h-[20px] text-[8px] mx-[1px] ${index === 0 ? "rounded-l-md" : ""}`}
                                        style={{
                                            width: `${skill.percent}%`,
                                            backgroundColor: skill.bgColor,
                                        }}
                                    />
                                ))}
                            </div>
                            <SkillDescription skills={skills} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default SkillsView
