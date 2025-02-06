const Header = () => {
    return (
        <div className="w-full h-[50px] bg-[#D4D8E5] flex flex-row justify-between items-center">
            <div className="flex flex-row items-center ml-8">
                <img src="/assets/image/solImage.svg" alt="sol image" className="w-[50px] h-[50px]" />
                <p className=" font-bold text-2xl">Kim JinSol</p>
                <p className="ml-12 text-xl">skek298@gmail.com</p>
            </div>
            <div>
                <p className="text-xl font-light mr-8">FrontEnd</p>
            </div>
        </div>
    )
}
export default Header
