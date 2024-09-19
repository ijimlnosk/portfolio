export type ProjectCardProps = {
    item: ProjectItem
}

export type ProjectItem = {
    id: number
    title: string
    subTitle: string
    thumbnail: string
    content: string
    period: string
    skill: string[]
    library: string[]
    link: ProjectLink[]
    distributeLink: string
}

export type ProjectLink = {
    title: string
    type: string
    url: string
}
