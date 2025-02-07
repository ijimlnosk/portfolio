import { useState } from "react"
import { MinimizedProps } from "./type"

const Minimized = ({ isMinimized, setIsMinimized }: MinimizedProps) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="space-x-2">
            <button
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => setIsMinimized(!isMinimized)}
                className={`bg-[#FEBC2E] w-3 h-3 rounded-full flex justify-center items-center `}
            >
                {isHover ? <div className="w-2 border border-black" /> : ""}
            </button>
        </div>
    )
}
export default Minimized
