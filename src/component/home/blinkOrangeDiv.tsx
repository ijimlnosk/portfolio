import { BlinkOrangeDivProps } from "./type"

const BlinkOrangeDiv = ({ children, className }: BlinkOrangeDivProps) => {
    return (
        <div className={`relative inline-block ${className}`}>
            <div className="absolute inset-0 bg-orange-400 animate-pulse rounded-lg"></div>
            <div className="relative bg-white p-4 rounded-lg">{children}</div>
        </div>
    )
}

export default BlinkOrangeDiv
