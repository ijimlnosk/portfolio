const Header = () => {
    return (
        <div className="w-full h-[50px] bg-[#D4D8E5] flex flex-row justify-between items-center">
            <div className="flex flex-row items-center ml-4">
                <img src="/assets/image/solImage.svg" alt="sol image" className="w-8 h-8" />
                <p className=" font-bold text-lg">Kim JinSol</p>
                <p className="ml-8 text-sm">skek298@gmail.com</p>
            </div>
            <div>
                <p className="text-sm font-light mr-8">FrontEnd</p>
            </div>
        </div>
    )
}
export default Header
