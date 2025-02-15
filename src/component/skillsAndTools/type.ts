import { SkillsAndToolsItem } from "../../api/type"

export type SkillsData = Record<string, SkillsAndToolsItem[]>

export type SkillsViewProps = {
    data: SkillsData
    layout?: "vertical" | "horizontal"
}
