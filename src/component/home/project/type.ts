import { ProjectMainItem } from "../../../mocks/data/type"

export type ProjectImageSectionProps = {
    oneLineIntroduction: string
    image: string[]
}

export type ProjectRangeProps = {
    range: string
    deploy?: string
    additionalRange?: string
}

export type ProjectViewProps = {
    data: ProjectMainItem
}

export type changeOfLineProps = {
    text: string
}
