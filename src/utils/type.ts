import { SkillsAndToolsItem } from "../api/type"

export type SeparateSkillDataProps = {
    horizontalData: Record<string, SkillsAndToolsItem[]>
    otherData: Record<string, SkillsAndToolsItem[]>
}
