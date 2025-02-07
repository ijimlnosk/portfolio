import { SkillIconProps } from "./type"
import SkillTitleView from "./skillTitleView"
import NonBlockingModal from "../common/modal/nonBlockingModal"
import { useDragAndDropSkill } from "../../hooks/useDragAndDropSkill"
import { useSkillModal } from "../../hooks/useSkillModal"

const SkillIcon: React.FC<SkillIconProps> = ({ skill, index, moveSkill }) => {
    const { isDragging, dragDropRef } = useDragAndDropSkill({ index, moveSkill, skill })
    const { isModalOpen, openModal, closeModal, data, isLoading, isError, content } = useSkillModal(skill)

    return (
        <>
            <div
                className={` group relative p-1.5 m-1 rounded-lg cursor-pointer transition ${isDragging ? "opacity-0" : "opacity-100"}`}
                onClick={openModal}
            >
                <img ref={dragDropRef} src={skill.icon} alt={skill.title} className="w-10 h-10" />
                <SkillTitleView skillTitle={skill.title} />
            </div>
            <NonBlockingModal isOpen={isModalOpen} onClose={closeModal} userInfo={data}>
                {content}
                {isLoading && <div>Loading...</div>}
                {isError && <div>유저 데이터를 불러오는데 실패했습니다.</div>}
            </NonBlockingModal>
        </>
    )
}

export default SkillIcon
