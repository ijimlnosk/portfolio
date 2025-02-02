import { Skills } from "../../constants/skills"

const SkillMenu = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[640px] py-2 bg-[#EAEEFA] rounded-lg flex flex-row fixed justify-center items-center bottom-2 shadow-lg">
                {Skills.map((item, index) => (
                    <div key={index} className="mx-2">
                        <img src={item.icon} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SkillMenu
