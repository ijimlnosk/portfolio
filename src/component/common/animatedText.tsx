import { useState } from "react"
import { AnimatedTextProps } from "../layout/component/type"

const AnimatedText = ({ text }: AnimatedTextProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <span className="inline-block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className={`inline-block transition-transform duration-100 ${isHovered ? "animate-bounce" : ""}`}
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                    {char}
                </span>
            ))}
        </span>
    )
}
export default AnimatedText
