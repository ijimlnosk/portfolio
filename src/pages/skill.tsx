import { useEffect, useState } from "react"
import ViewLayout from "../component/common/viewLayout"
import { DisplaySkillType } from "./type"

const MAX_DISPLAY_SKILLS = 14

const Skill = () => {
    const [isPowerOn, setIsPowerOn] = useState(false)
    const [displaySkill, setDisplaySkill] = useState<DisplaySkillType[]>([])
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Git",
        "Redux",
        "MySql",
        "next.js",
        "Spring",
        "Android",
        "kotlin",
    ]

    useEffect(() => {
        if (isPowerOn) {
            let index = 0
            const timer = setInterval(() => {
                setDisplaySkill(prev => {
                    const newSkills = [...prev]
                    if (newSkills.length >= MAX_DISPLAY_SKILLS) {
                        newSkills.shift() // 가장 오래된 스킬 제거
                    }
                    newSkills.push({
                        skill: skills[index],
                        style: {
                            left: `${Math.random() * 80}%`,
                            top: `${Math.random() * 80}%`,
                            fontSize: `${Math.random() * (1.5 - 1) + 1}rem`,
                        },
                    })
                    return newSkills
                })
                index = (index + 1) % skills.length // 순환
            }, 100)
            return () => clearInterval(timer)
        } else {
            setDisplaySkill([])
        }
    }, [isPowerOn])

    return (
        <ViewLayout>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="text-3xl mb-4">CLICK!</div>
                {/* 전원 버튼 */}
                <button
                    onClick={() => setIsPowerOn(!isPowerOn)}
                    className={`w-16 h-16 rounded-full border-4 flex items-center justify-center mb-8 transition-colors duration-300 ${
                        isPowerOn ? "border-green-500 bg-green-200" : "border-red-500 bg-red-200"
                    }`}
                >
                    <div
                        className={`w-8 h-8 rounded-full transition-colors duration-300 ${isPowerOn ? "bg-green-500" : "bg-red-500"}`}
                    ></div>
                </button>

                {/* 스크린 */}
                <div
                    className={`relative w-full max-w-[1080px] flex-grow rounded-lg overflow-hidden transition-opacity duration-500 ${isPowerOn ? "opacity-100" : "opacity-0"}`}
                >
                    {displaySkill.map((skillObj, index) => (
                        <p key={index} className="absolute text-green-500 font-mono" style={skillObj.style}>
                            {skillObj.skill}
                        </p>
                    ))}
                </div>
            </div>
        </ViewLayout>
    )
}
export default Skill
