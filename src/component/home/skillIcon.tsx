import { useDrag, useDrop } from "react-dnd"
import { ITEM_TYPE } from "../../constants/skills"
import { SkillIconProps } from "./type"
import { motion } from "framer-motion"
import SkillTitleView from "./skillTitleView"
import { useState } from "react"
import NonBlockingModal from "../common/modal/nonBlockingModal"
import { renderModalContent } from "./skillModalContent"

const SkillIcon: React.FC<SkillIconProps> = ({ skill, index, moveSkill }) => {
    const [isModalOpen, setIsModalOPen] = useState(false)

    // 드래그 훅
    // item: 드래그할 때 전달할 데이터(index와 skill 정보)
    // collect: emform tkdxofmf isDragging으로 수집(드래그 중인지 여부)
    const [{ isDragging }, dragRef] = useDrag({
        type: ITEM_TYPE, // 드래그 타입
        item: { index, skill },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    // 드랍 훅
    // hover: 드래그된 아이템이 이 컴포넌트 위로 올라왔을 때 실행
    // draggedItem.index !== index -> 다른 위치로 왔을 때만 순서 변경
    const [, dropRef] = useDrop({
        accept: ITEM_TYPE,
        hover: (draggedItem: { index: number }) => {
            // 다른 index로 넘어왔을 때만 순서 변경
            if (draggedItem.index !== index) {
                moveSkill(draggedItem.index, index)
                // draggedItem.index를 현재 index로 업데이트해서
                // 연속으로 moveSkill이 불필요하게 반복되지 않게 함
                draggedItem.index = index
            }
        },
    })

    return (
        <>
            <div
                // layout
                className={` group relative p-2 m-1 bg-gray-200 rounded-lg cursor-pointer transition ${isDragging ? "opacity-0" : "opacity-100"}`}
                // transition={{
                //     layout: {
                //         type: "spring",
                //         duration: 1,
                //         ease: "easeInOut",
                //         bounce: 0.1,
                //     },
                // }}
                onClick={() => setIsModalOPen(true)}
            >
                <img ref={node => dragRef(dropRef(node))} src={skill.icon} alt={skill.title} className="w-12 h-12" />
                <SkillTitleView skillTitle={skill.title} />
            </div>
            <NonBlockingModal isOpen={isModalOpen} onClose={() => setIsModalOPen(false)}>
                {renderModalContent(skill.title)}
            </NonBlockingModal>
        </>
    )
}

export default SkillIcon
