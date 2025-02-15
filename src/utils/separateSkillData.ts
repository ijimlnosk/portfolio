import { SkillsAndToolsItem } from "../api/type"

export const separateSkillData = (skillData: Record<string, SkillsAndToolsItem[]>, horizontalVategories: string[]) => {
    const horizontalData = horizontalVategories.reduce(
        (acc, category) => {
            if (skillData[category]) {
                acc[category] = skillData[category]
            }
            return acc
        },
        {} as Record<string, SkillsAndToolsItem[]>,
    )

    const otherData = Object.keys(skillData).reduce(
        (acc, category) => {
            if (!horizontalVategories.includes(category)) {
                acc[category] = skillData[category]
            }
            return acc
        },
        {} as Record<string, SkillsAndToolsItem[]>,
    )

    return { horizontalData, otherData }
}
