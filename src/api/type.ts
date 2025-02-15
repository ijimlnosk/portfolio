export type DeveloperValue = {
    title: string
    description: string
}
export type MoreInfo = {
    title: string
    nickName: string
    description: string
    icon: string
    link: string
}
export type StudyTimeLine = {
    title: string
    link: string
    icon: string
}

export type getUserInfoResponse = {
    userName: string
    userProfile: string
    position: string
    email: string
    phoneNumber: string
    birthday: string
    university: string
    major: string
    developerValues: DeveloperValue[]
    moreInfo: MoreInfo[]
    skills: string[]
    tools: string[]
    studyTimeLine: StudyTimeLine[]
}

export type getSkillsAndToolsResponse = {
    Language: SkillsAndToolsItem[]
    FrameWork: SkillsAndToolsItem[]
    RunTime: SkillsAndToolsItem[]
    Deploy: SkillsAndToolsItem[]
    CollaborationTools: SkillsAndToolsItem[]
    Library: SkillsAndToolsItem[]
    StyleSheet: SkillsAndToolsItem[]
    UIKit: SkillsAndToolsItem[]
    Networking: SkillsAndToolsItem[]
}

export type SkillsAndToolsItem = {
    name: string
    percent: number
    bgColor: string
}
