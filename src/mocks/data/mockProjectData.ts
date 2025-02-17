import { ProjectMainItem } from "../../component/project/type"

export const mockProjects: ProjectMainItem[] = [
    {
        id: 1,
        title: "TAPPREP",
        subTitle: "",
        thumbNail: "",
        range: "2024.01.13 - onProgress",
        oneLineIntroduction: "어디서든 바로 공부할 수 있도록 한 기술 면접 개념 문제풀이 앱입니다.",
        image: ["", "", ""],
        firstDescription: ``,
        secondDescription: ``,
        projectSideMenu: {
            projectInfomation: [
                {
                    name: "GITHUB",
                    text: "프로젝트 레포지토리",
                    link: "https://github.com/mobi-projects/yeogi-client",
                    image: "",
                },
                { name: "VERCEL", text: "배포된 웹 페이지", link: "https://yeogi-client.vercel.app/", image: "" },
                {
                    name: "FIGMA",
                    text: "프로젝트 화면 디자인",
                    link: "https://www.figma.com/design/TQX56AWMGdAT5DYDpmWKBk/YeoGi?node-id=0-1&t=swrAnTlUQLb9xo3O-1",
                    image: "",
                },
            ],
            used: [
                { title: "Collaboration Tool", name: "Discord + Notion + Kakao", image: "" },
                { title: "Style Library", name: "Tailwind CSS", image: "" },
            ],
        },
    },
    {
        id: 2,
        title: "YEOGI",
        subTitle: "여행을 기록하다, 여기",
        thumbNail: "https://github.com/user-attachments/assets/a0eb6c8c-8719-4555-befc-c9484b0c763e",
        range: "2024.05.25 - 2024.07.21",
        deploy: "2024.07.22 - 2024.07.31",
        additionalRange: "2024.08.01 - on progress",
        oneLineIntroduction:
            "Yeogi(여기)는 여행을 즐기는 사람들이 자신들의 여행 추억을 게시글로 남기며 여행지에 대한 정보를 공유하는 사이트입니다.",
        image: [
            "https://github.com/user-attachments/assets/fb98ec52-f5bd-4278-b4a9-9d50ce515071",
            "https://github.com/user-attachments/assets/636e54b5-267a-4f5e-a895-bf0242a3aa07",
            "https://github.com/user-attachments/assets/fc334916-b602-4a48-9507-5cc05e925c1d",
        ],
        firstDescription: `게시글 상세 페이지의 경우, 많은 내용의 텍스트와 이미지로 인해 로딩에 오래 걸렸습니다. 
        suspense로 처리했던 부분을 SSR query fetching방식으로 변경해 시간을 단축 시켰습니다.
        SEO 최적화 및 공유된 게시글의 최적화를 위해 dynamic meta-data를 적용했습니다.
        layout shift 현상을 skeleton UI로 해결하고 고화질 이미지의 확장자를 svg에서 webp로 변경해 lighthouseDML performance 점수를 40점대에서 75점으로 올렸습니다.
        검색창에서 발생하는 불필요한 리렌더링을 줄이기 위해 debounce를 적용했습니다.`,
        secondDescription: `프론트와 백의 원활한 소통을 주도했으며 전체 책임자 역할을 맡았습니다.
        프론트 전반의 코드 오류를 해결하는데 결정적인 역할을 했으며,
        주요하면서 가자 어려웠던기능 중 하나인 <내 지도 꾸미기>를 도맡아 진행했습니다.`,
        projectSideMenu: {
            projectInfomation: [
                {
                    name: "GITHUB",
                    text: "프로젝트 레포지토리",
                    link: "https://github.com/mobi-projects/yeogi-client",
                    image: "https://github.com/user-attachments/assets/a0eb6c8c-8719-4555-befc-c9484b0c763e",
                },
                {
                    name: "VERCEL",
                    text: "배포된 웹 페이지",
                    link: "https://yeogi-client.vercel.app/",
                    image: "https://github.com/user-attachments/assets/875db71f-7713-41cf-9c59-4cd97fc2a816",
                },
                {
                    name: "FIGMA",
                    text: "프로젝트 화면 디자인",
                    link: "https://www.figma.com/design/TQX56AWMGdAT5DYDpmWKBk/YeoGi?node-id=0-1&t=swrAnTlUQLb9xo3O-1",
                    image: "https://github.com/user-attachments/assets/49c74137-f1f8-49b0-bcc2-8d651de2e999",
                },
                {
                    name: "FIGMA",
                    text: "프로젝트 기획서",
                    link: "https://www.figma.com/design/VoBkptzgv2kOQYvWmfO0ln/%EC%97%AC%EA%B8%B0-%EA%B8%B0%ED%9A%8D%EC%84%9C?node-id=0-1&t=8Y35GiIG4MGhiiCo-1",
                    image: "https://github.com/user-attachments/assets/8036ebf3-fac1-4c0c-8b6a-5712db929eb1",
                },
                {
                    name: "VELOG",
                    text: "프로젝트에 대한 KPT 회고",
                    link: "https://velog.io/@skek298/Yeo-gi-프로젝트-KPT-회고",
                    image: "https://github.com/user-attachments/assets/3f9db21c-a81b-4811-ae7e-096357abdd5f",
                },
            ],
            used: [
                {
                    title: "Collaboration Tool",
                    name: "Jira + Discord + Notion + Kakao",
                    image: "https://github.com/user-attachments/assets/8bdd87b6-b590-4df2-a9ee-ff5347cb7094",
                },
                {
                    title: "Style Library",
                    name: "Tailwind CSS",
                    image: "https://github.com/user-attachments/assets/668ef71d-f688-4845-bb29-b1e6e10d7309",
                },
                {
                    title: "Language",
                    name: "TypeScript",
                    image: "https://github.com/user-attachments/assets/281ccb72-a1e3-4d3e-94bf-156b2cdd2a39",
                },
                {
                    title: "Frameword",
                    name: "NextJS",
                    image: "https://github.com/user-attachments/assets/cf412443-0814-4a97-b3d6-7ed177366977",
                },
                {
                    title: "Client State Library",
                    name: "Zustand",
                    image: "https://github.com/user-attachments/assets/529d4a6e-139c-4c77-a564-6e291a8ac5d9",
                },
                {
                    title: "Server State Library",
                    name: "React Query",
                    image: "https://github.com/user-attachments/assets/4cf7f895-054f-44c6-9349-b3ac0e8f6e37",
                },
            ],
        },
    },
    {
        id: 3,
        title: "In Your Poke",
        subTitle: "당신의 손 안에, 포켓몬",
        thumbNail: "https://github.com/user-attachments/assets/c7f0c67b-4d57-433d-a21d-7fc08b6f3527",
        range: "2024.04.29 - 2024.05.12",
        oneLineIntroduction:
            "외부 API와 백엔드 API를 사용해 작업한 첫 토이 프로젝트입니다. 랜덤한 포켓몬스터를 포획할 수 있으며 유저가 잡은 포켓몬 목록을 확인할 수 있습니다.",
        image: [
            "https://github.com/user-attachments/assets/e3d24369-abc5-44eb-b8b7-6fc365996eb7",
            "https://github.com/user-attachments/assets/2ecae2ba-5169-4532-aab9-9b9dd65b3002",
            "https://github.com/user-attachments/assets/4f0e0694-0130-4579-b0b1-952c745b05d6",
        ],
        firstDescription: `포켓몬스터 API를 사용하는 만큼 디자인에서도 포켓몬스터의 요소를 보여주고자 했습니다.
        특히 사용자가 처음으로 볼 페이지(로그인/회원가입)에서 인상을 주기 위해  
        몬스터 볼의 열리는 특징을 활용했습니다.
        또한  API 작성 및 연결과 같은 백엔드 코드 작성 부분을 담당해 작업했습니다.`,
        secondDescription: `900개의 데이터를 Promise.all로 가져와 랜덤으로 보여주는 방식으로 인해 
        로딩 시간이 길어지는 문제가 있었습니다. 이에 따라 불필요한 데이터 로딩 시간을 줄이기 위해 
        랜덤 ID를 부여한 데이터 수를 정의해 특정 데이터만 가져오는 방식으로 변경하였습니다.
        결과적으로 로딩 시간을 1/10로 줄임으로써 사용자 경험을 개선시킬 수 있었습니다.
        제공 되던 백엔드 서버가 종료돼  node.js를 사용하여 백엔드를 재 구현하였습니다.
        이 과정에서 CORS 에러 해결을 통해 도메인 간 통신의 중요성을 이해하게 되었고, 
        API를 직접 설계하고 구현하면서 API 구조에 대해 더 알게 되었습니다.`,
        projectSideMenu: {
            projectInfomation: [
                {
                    name: "GITHUB",
                    text: "프로젝트 레포지토리",
                    link: "https://github.com/mobi-projects/catch-poket-mon",
                    image: "https://github.com/user-attachments/assets/c7f0c67b-4d57-433d-a21d-7fc08b6f3527",
                },
                {
                    name: "VERCEL",
                    text: "배포된 웹 페이지",
                    link: "https://catch-poket-mon.vercel.app/",
                    image: "https://github.com/user-attachments/assets/875db71f-7713-41cf-9c59-4cd97fc2a816",
                },
                {
                    name: "FIGMA",
                    text: "프로젝트 화면 디자인",
                    link: "https://www.figma.com/design/aYRsurdfgX0uaiB194yPA6/Untitled?node-id=0-1&t=1X6N74P7h2e5UJwI-1",
                    image: "https://github.com/user-attachments/assets/49c74137-f1f8-49b0-bcc2-8d651de2e999",
                },
            ],
            used: [
                {
                    title: "Collaboration Tool",
                    name: "Discord + Kakao",
                    image: "https://github.com/user-attachments/assets/711aa1b6-479e-4a39-80ef-febbf02ca0d9",
                },
                {
                    title: "Style Library",
                    name: "Tailwind CSS",
                    image: "https://github.com/user-attachments/assets/668ef71d-f688-4845-bb29-b1e6e10d7309",
                },
                {
                    title: "Language",
                    name: "TypeScript",
                    image: "https://github.com/user-attachments/assets/281ccb72-a1e3-4d3e-94bf-156b2cdd2a39",
                },
                {
                    title: "Framework",
                    name: "React",
                    image: "https://github.com/user-attachments/assets/3de8d529-9107-4e9f-95b8-e925fa485d48",
                },
                {
                    title: "Client State Library",
                    name: "Redux",
                    image: "https://github.com/user-attachments/assets/9893def9-57c6-4d6e-8386-9174714e4ad7",
                },
                {
                    title: "Server State Library",
                    name: "React Query",
                    image: "https://github.com/user-attachments/assets/4cf7f895-054f-44c6-9349-b3ac0e8f6e37",
                },
                {
                    title: "Schema-based ValibationLibrary",
                    name: "Zod",
                    image: "https://github.com/user-attachments/assets/66bf1e06-61e9-4bfc-8b2b-a3016d070b27",
                },
            ],
        },
    },
    {
        id: 4,
        title: "PRDeliver",
        subTitle: "",
        thumbNail: "",
        range: "",
        oneLineIntroduction: "",
        image: ["https://github.com/user-attachments/assets/2ecd693a-6de8-4d74-a546-0a64ba0a9214"],
        firstDescription: ``,
        secondDescription: ``,
        projectSideMenu: {
            projectInfomation: [
                {
                    name: "GITHUB",
                    text: "프로젝트 레포지토리",
                    link: "https://github.com/mobi-projects/yeogi-client",
                    image: "",
                },
                { name: "VERCEL", text: "배포된 웹 페이지", link: "https://yeogi-client.vercel.app/", image: "" },
                {
                    name: "FIGMA",
                    text: "프로젝트 화면 디자인",
                    link: "https://www.figma.com/design/TQX56AWMGdAT5DYDpmWKBk/YeoGi?node-id=0-1&t=swrAnTlUQLb9xo3O-1",
                    image: "",
                },
            ],
            used: [
                { title: "Collaboration Tool", name: "Discord + Notion + Kakao", image: "" },
                { title: "Style Library", name: "Tailwind CSS", image: "" },
            ],
        },
    },
]
