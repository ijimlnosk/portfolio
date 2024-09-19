import { useEffect, useRef, useState } from "react"

const Home = () => {
    const text = "안녕하세요. Web FrontEnd Developer 김진솔 입니다."
    const [displayText, setDisplayText] = useState("")
    const [isTypingDone, setIsTypingDone] = useState(false)
    const indexRef = useRef(0)

    useEffect(() => {
        const textArr = Array.from(text)
        const hasVisited = sessionStorage.getItem("hasVisited")

        const startTyping = () => {
            const timer = setInterval(() => {
                if (indexRef.current < textArr.length) {
                    setDisplayText(text.slice(0, indexRef.current + 1))
                    indexRef.current++

                    if (indexRef.current >= textArr.length) {
                        clearInterval(timer)
                        setIsTypingDone(true)
                    }
                }
            }, 125)
            return timer
        }

        let timer: ReturnType<typeof setInterval>
        if (hasVisited) {
            // 이미 방문한 경우 바로 시작
            timer = startTyping()
            return () => clearInterval(timer)
        } else {
            // 첫 방문인 경우 2.5초 지연 후 시작
            const delay = setTimeout(() => {
                timer = startTyping()
                sessionStorage.setItem("hasVisited", "true")
            }, 2500)
            return () => {
                clearTimeout(delay)
                clearInterval(timer)
            }
        }
    }, [])

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div>
                    <p
                        className={`inline-block whitespace-nowrap overflow-hidden border-r-2 text-3xl ${isTypingDone ? "border-transparent" : "border-black animate-blink"}`}
                    >
                        {displayText}
                    </p>
                </div>
            </div>
        </>
    )
}
export default Home
