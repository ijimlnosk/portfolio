import { useEffect, useState } from "react"
import Loading from "./loading"

const LoadingWrapper = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited")

        if (!hasVisited) {
            const timer = setTimeout(() => {
                setIsLoading(false)
                sessionStorage.setItem("hasVisited", "true")
            }, 2000)

            return () => clearTimeout(timer)
        } else {
            setIsLoading(false)
        }
    }, [])

    return isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
            <Loading />
        </div>
    ) : null
}
export default LoadingWrapper
