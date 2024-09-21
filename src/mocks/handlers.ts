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
]
