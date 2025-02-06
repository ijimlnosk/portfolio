import SkillMenu from "../component/home/skillMenu"

const Home = () => {
    return (
        <>
            <div className="w-full h-[calc(100vh-50px)] flex relative justify-center items-center bg-[url('/assets/image/Silver_iMac_M4_wallpaper_1.svg')] bg-cover bg-center">
                <SkillMenu />
            </div>
        </>
    )
}
export default Home
