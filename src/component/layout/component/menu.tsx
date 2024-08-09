import { useEffect, useRef, useState } from "react"
import MenuIcon from "./menuIcon"

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const menuItems = [
        { title: "HOME", link: "/" },
        { title: "PROJECTS", link: "project" },
        { title: "SKILLS", link: "skill" },
        { title: "ABOUT", link: "about" },
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className="w-full h-full flex justify-start items-center">
            <div className="p-4">
                <MenuIcon toggleMenu={toggleMenu} />
            </div>
            <div ref={menuRef}>
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-[#333] flex flex-col items-center pt-40 px-4 transition-transform duration-1000 ease-in-out shadow-lg transform ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <ul className="space-y-40">
                        {menuItems.map((item, index) => (
                            <li key={index} className="cursor-pointer hover:text-gray-500 text-3xl">
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Menu
