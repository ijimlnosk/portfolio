import { useEffect, useState } from "react"

const Loading = () => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {show && (
                <div className="w-[60%] h-2 bg-gray-600">
                    <div className="w-full h-full bg-white animate-[loading_2s_linear] rounded-full"></div>
                </div>
            )}
        </>
    )
}

export default Loading
