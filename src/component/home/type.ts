import { ReactNode } from "react"

export type BlinkOrangeDivProps = {
    children: ReactNode
    className?: string
}

export type SkillsType = {
    id: number
    title: string
    icon: string
    position: {
        x: number
        y: number
    }
}

export type DraggableItemProps = {
    item: SkillsType
    position: {
        x: number
        y: number
    }
}
