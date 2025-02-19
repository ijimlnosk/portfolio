import { useEffect, useState } from "react"
import SkillMenu from "../component/home/skillMenu"
import { useDrop } from "react-dnd"
import FolderIconComponent from "../component/home/folder/folderIconComponent"

const ITEM_TYPE = "FOLDER_ICON"

const Home = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updatePosition = () => {
            setPosition(prev => ({
                x: Math.max(0, Math.min(window.innerWidth - 100, prev.x)),
                y: Math.max(0, Math.min(window.innerHeight - 50, prev.y)),
            }))
        }

        window.addEventListener("resize", updatePosition)
        return () => window.removeEventListener("resize", updatePosition)
    }, [])

    useEffect(() => {
        setPosition({
            x: window.innerWidth - 100,
            y: window.innerHeight - 300,
        })
    }, [])

    const [, drop] = useDrop(() => ({
        accept: ITEM_TYPE,
        drop: (_, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset()
            if (!delta) return

            setPosition(prev => ({
                x: Math.max(0, Math.min(window.innerWidth - 100, prev.x + delta.x)),
                y: Math.max(0, Math.min(window.innerHeight - 50, prev.y + delta.y)),
            }))
        },
    }))

    return (
        <>
            <div
                ref={drop}
                className="w-[100vw] h-[calc(100vh-50px)] flex relative justify-center items-center bg-[url('/assets/image/Silver_iMac_M4_wallpaper_1.svg')] bg-cover bg-center"
            >
                <FolderIconComponent position={position} name="mobi" />
                <SkillMenu />
            </div>
        </>
    )
}
export default Home
