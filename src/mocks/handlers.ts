import { http, HttpResponse } from "msw"
import { ProjectItem } from "../component/project/type"

const mockProjects: ProjectItem[] = [
    {
        id: 1,
        title: "Yeo-gi",
        subTitle: "여행 정보 커뮤니티",
        content: "",
        thumbnail: "https://github.com/user-attachments/assets/2f054f96-6c6c-4e23-bf73-8224ff556849",
        period: "2024.05 - 2024.08",
        skill: ["Next.js", "TypeScript"],
        library: ["React-Query", "Next-Auth", "tailwindCSS", "Zustand"],
        link: [
            { title: "깃허브", type: "github", url: "https://github.com/mobi-projects/yeogi-client" },
            {
                title: "회고",
                type: "vlog",
                url: "https://velog.io/@skek298/Yeo-gi-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-KPT-%ED%9A%8C%EA%B3%A0",
            },
            {
                title: "기획서",
                type: "figma",
                url: "https://www.figma.com/design/VoBkptzgv2kOQYvWmfO0ln/%EC%97%AC%EA%B8%B0-%EA%B8%B0%ED%9A%8D%EC%84%9C?node-id=0-1&t=mZIuUUQ188zbjtG0-1",
            },
        ],
        distributeLink: "https://yeogi-client.vercel.app/",
    },
    {
        id: 2,
        title: "Purr-Tunes",
        subTitle: "고양이가 상호작용하는 Youtube Music",
        content: "",
        thumbnail: "https://github.com/user-attachments/assets/fccc5cc1-a7d1-4995-8511-559a7b6a5d46",
        period: "2024.08 - 진행중",
        skill: ["Next.js", "TypeScript"],
        library: ["SWR", "Next-Auth", "tailwindCSS", "Jotai"],
        link: [{ title: "깃허브", type: "github", url: "https://github.com/ThugDev/PurrTunes" }],
        distributeLink: "https://purr-tunes.vercel.app/",
    },
    {
        id: 3,
        title: "Catch Poketmon",
        subTitle: "포켓몬 잡기 사이트",
        content: "",
        thumbnail: "https://github.com/user-attachments/assets/95e36dc7-b25e-4cf6-9773-c41f126c20cf",
        period: "2024.04 - 2024.05",
        skill: ["React.js", "TypeScript"],
        library: ["SWR", "Next-Auth", "tailwindCSS", "Jotai"],
        link: [
            { title: "깃허브", type: "github", url: "https://github.com/mobi-projects/catch-poket-mon" },
            {
                title: "회고",
                type: "vlog",
                url: "https://velog.io/@skek298/catchpokemon-Project-KPT-회고",
            },
        ],
        distributeLink: "https://catchpoketmon.soljk.com/",
    },
]

const mockUserInfo = {
    userName: "김진솔",
    userProfile: "https://github.com/user-attachments/assets/6cda5600-fa72-4d7c-94e6-0ad3ffc23abf",
    position: "프론트엔드 개발자",
    email: "skek298@gmail.com",
    phoneNumber: "010-7669-3414",
    birthday: "1996년 03월 26일",
    university: "대림대학교",
    major: "컴퓨터 소프트웨어과",
    developerValues: [
        {
            title: "지속적인 학습",
            description:
                "다양한 언어와 기술을 학습하는 것은 문제 해결 능력을 키우는 데 도움을 주며 나아가 개발 역량을 확장하는 데 필수적인 요소라고 생각합니다. 새로운 개념을 익히고 적용하는 과정에서 깊이 있는 이해를 쌓아가는 것에 흥미를 느끼고 있습니다. 현재는 React Native 공부를 하고 있습니다.",
        },
        {
            title: "협업",
            description:
                "개발의 필수 요건 중 하나인 협업은 원활한 소통이 수반돼야 한다고 생각합니다. 체계화된 PR과 정보 공유는 팀원 간의 이해를 돕는 동시에 병목 현상을 파악해 프로젝트의 진행 상황을 투명하게 유지할 수 있습니다. 개발자 커뮤니티에서 동료 개발자들과 협업하는 과정에서 협업의 중요성을 느꼈고 “협업이 원활한 개발자”가 되기 위해 노력하고 있습니다.",
        },
    ],
    moreInfo: [
        {
            title: "github",
            nickName: "@ijimlnosk",
            description: "click icon or chevron to visit my github",
            icon: "/assets/icon/githubIcon.svg",
            link: "https://github.com/ijimlnosk",
        },
        {
            title: "velog",
            nickName: "@skek298",
            description: "click icon or chevron to visit my velog",
            icon: "/assets/icon/velogIcon.svg",
            link: "https://velog.io/@skek298/posts",
        },
    ],
    skills: ["JavaScript", "TypeScript", "React", "ReactNative", "Next.js", "Kotlin", "swift"],
    tools: ["", "", "", "", ""],
    studyTimeLine: [
        {
            title: "TapPerp",
            link: "https://github.com/ThugDev/TapPrep",
            icon: "https://github.com/user-attachments/assets/578302e4-25d8-4d0c-92ed-edd3a6568080",
        },
        {
            title: "PurrTunseMobile",
            link: "https://github.com/ThugDev/PurrTunesMobile",
            icon: "https://github.com/user-attachments/assets/587b8a78-17e0-4c9a-adca-fe747a77d336",
        },
        {
            title: "모여봐요, 면접의 숲",
            link: "https://github.com/interview-crossing",
            icon: "https://github.com/user-attachments/assets/e5f4f9af-8fdb-4700-8eb5-a5e763213606",
        },
        {
            title: "Mobi Community",
            link: "https://github.com/mobi-community",
            icon: "https://github.com/user-attachments/assets/0b2180b9-710e-40fa-9ded-3c78e95c9d4c",
        },
        {
            title: "PR-Dliver",
            link: "https://github.com/ThugDev/PR-Deliver",
            icon: "https://github.com/user-attachments/assets/1279eb79-f99e-48f8-b02b-fd303ffade86",
        },
        {
            title: "여행을 기록하다, 여기",
            link: "https://github.com/mobi-projects/yeogi-client",
            icon: "https://github.com/user-attachments/assets/4cbd91a8-f86d-4a47-8d1e-3f6108a48bd8",
        },
        {
            title: "Mobi",
            link: "",
            icon: "https://github.com/user-attachments/assets/0b2180b9-710e-40fa-9ded-3c78e95c9d4c",
        },
        {
            title: "P.E.A",
            link: "https://github.com/PurpleDynamics/PEA_Project",
            icon: "https://github.com/user-attachments/assets/477e679f-445e-4930-9edf-5d94e7e00416",
        },
        {
            title: "Korea IT",
            link: "",
            icon: "https://github.com/user-attachments/assets/0b2180b9-710e-40fa-9ded-3c78e95c9d4c",
        },
        {
            title: "졸업 과제 : 가계부 어플",
            link: "https://github.com/ijimlnosk/capstone22",
            icon: "https://github.com/user-attachments/assets/0b2180b9-710e-40fa-9ded-3c78e95c9d4c",
        },
    ],
}

export const handlers = [
    http.get(`/api/projects`, () => {
        return HttpResponse.json(mockProjects)
    }),

    http.get("/api/projects/:id", ({ params }) => {
        const id = params.id
        const project = mockProjects[Number(id)]
        if (project) {
            return HttpResponse.json(project)
        } else {
            return new HttpResponse(JSON.stringify({ message: "Project not found" }), {
                status: 404,
            })
        }
    }),
    http.get("/api/userInfo", () => {
        return HttpResponse.json(mockUserInfo)
    }),
]
