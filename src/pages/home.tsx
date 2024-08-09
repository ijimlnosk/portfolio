import { useEffect, useRef, useState } from "react"

const Home = () => {
    const text = "안녕하세요. Web FrontEnd Developer 김진솔 입니다."
    const [displayText, setDisplayText] = useState("")
    const [isTypingDone, setIsTypingDone] = useState(false)
    const indexRef = useRef(0)

    useEffect(() => {
        const textArr = Array.from(text)

        const timer = setInterval(() => {
            if (indexRef.current < textArr.length) {
                setDisplayText(text.slice(0, indexRef.current + 1))
                indexRef.current++

                if (indexRef.current >= textArr.length) {
                    clearInterval(timer)
                    setIsTypingDone(true)
                }
            }
        }, 100)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div>
                <p
                    className={`inline-block whitespace-nowrap overflow-hidden border-r-2 text-3xl ${isTypingDone ? "border-transparent" : "border-black animate-blink"}`}
                >
                    {displayText}
                </p>
            </div>
        </div>
    )
}
export default Home
