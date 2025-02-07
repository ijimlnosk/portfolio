import { SkillsType } from "../component/home/type"

export interface UseDraggableProps {
    x: number
    y: number
}

export type Position = {
    width: number
    height: number
}

export type UseDragAndDropProps = {
    index: number
    skill: SkillsType
    moveSkill: (from: number, to: number) => void
}
