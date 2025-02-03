import { ReactNode } from "react"

export type BlinkOrangeDivProps = {
    children: ReactNode
    className?: string
}

export type SkillsType = {
    id: number
    title: string
    icon: string
}

export type SkillIconProps = {
    skill: SkillsType
    index: number
    moveSkill: (fromIndex: number, toIndex: number) => void
}
