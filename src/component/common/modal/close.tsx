import { useState } from "react"
import { CloseProps } from "./type"

const Close = ({ onClose }: CloseProps) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="space-x-2">
            <button
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={onClose}
                className={`bg-[#FF5F57] w-3 h-3 text-sm rounded-full flex justify-center items-center `}
            >
                {isHover ? "x" : ""}
            </button>
        </div>
    )
}
export default Close
