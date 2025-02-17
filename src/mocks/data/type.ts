export type ProjectCardProps = {
    item: ProjectMainItem
}

export type ProjectMainItem = {
    id: number
    title: string
    subTitle: string
    thumbNail: string
    range: string
    deploy?: string
    additionalRange?: string
    oneLineIntroduction: string
    image: string[]
    firstDescription: string
    secondDescription: string
    projectSideMenu: ProjectSideItem
}

export type ProjectSideItem = {
    projectInfomation: {
        name: string
        text: string
        link?: string
        image: string
    }[]
    used: {
        title: string
        name: string
        image: string
    }[]
}
