import { useState } from "react"
import { SkillsType } from "../component/home/type"
import { useUserInfo } from "./useUserInfo"
import { renderModalContent } from "../component/home/skillModalContent"

export const useSkillModal = (skill: SkillsType) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [skillTitle, setSkillTitle] = useState("")
    const { data, isLoading, isError } = useUserInfo()

    const openModal = () => {
        if (skill.title === "UserInfo") {
            setSkillTitle("UserInfo")
            setIsModalOpen(true)
        } else if (skill.title === "Project") {
            setSkillTitle("Project")
            setIsModalOpen(true)
        }
    }

    const closeModal = () => setIsModalOpen(false)

    const content = renderModalContent(skill.title)

    return { isModalOpen, openModal, closeModal, data, isLoading, isError, content, skillTitle }
}
