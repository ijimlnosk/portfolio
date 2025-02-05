import { ReactNode, useEffect, useState } from "react"
import Loading from "./loading"

interface LoadingWrapperProps {
    children: ReactNode
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
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

    if (isLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <Loading />
            </div>
        )
    }

    return <>{children}</>
}
export default LoadingWrapper
