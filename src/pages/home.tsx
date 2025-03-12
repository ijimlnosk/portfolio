import SkillMenu from "../component/home/skillMenu"

import FolderIconComponent from "../component/home/folder/folderIconComponent"
import { useFolderPositions } from "../hooks/useFolderPositions"

const Home = () => {
    const { positions, drop } = useFolderPositions()

    return (
        <>
            <div
                ref={drop}
                className="w-[100vw] h-[calc(100vh-50px)] flex relative justify-center items-center bg-[url('/assets/image/Silver_iMac_M4_wallpaper_1.svg')] bg-cover bg-center"
            >
                {positions.map(({ x, y, name }) => (
                    <FolderIconComponent key={name} position={{ x, y }} name={name} />
                ))}
                <SkillMenu />
            </div>
        </>
    )
}
export default Home
