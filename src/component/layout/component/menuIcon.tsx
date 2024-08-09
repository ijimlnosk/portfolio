import { MenuIconProps } from "./type"

const MenuIcon = ({ toggleMenu }: MenuIconProps) => {
    return (
        <button
            className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none"
            onClick={toggleMenu}
        >
            <span className="w-8 h-1 bg-white rounded-lg transition-all duration-300 ease-linear"></span>
            <span className="w-8 h-1 bg-white rounded-lg transition-all duration-300 ease-linear"></span>
            <span className="w-8 h-1 bg-white rounded-lg transition-all duration-300 ease-linear"></span>
        </button>
    )
}
export default MenuIcon
