import { MobiItem } from "./type"

export const mockMobi: MobiItem = {
    title: "프론트엔드 개발자 커뮤니티",
    titleLink: "https://velog.io/@skek298/MOBI-%ED%9A%8C%EA%B3%A0",
    image: "https://github.com/user-attachments/assets/6aea0b66-8d66-43c1-8f96-2bc91867ac94",
    contents: [
        {
            title: "begginer 01",
            subTitle: "상태 최적화.txt",
            description: "의존성 주입과 관심사 분리",
            link: "https://github.com/ijimlnosk/mobi-3rd-begginer-1",
            children: true,
            childrenTitle: "mobi-3rd-bdgginer-1",
        },
        {
            title: "begginer 02",
            description: "디자인 시스템 적용과 관련 다양한 라이브러리의 사용",
            link: "https://github.com/ijimlnosk/mobi-3rd-begginer-2",
            children: true,
            childrenTitle: "mobi-3rd-bdgginer-2",
        },
        {
            title: "begginer 03",
            subTitle: "보일러 템플릿을 활용한 폴더 및 컴포넌트 구조 설계.txt",
            description: "RHF와 YUP을 활용한 유효성 검사",
            link: "https://github.com/ijimlnosk/mobi-3rd-begginer-3",
            children: true,
            childrenTitle: "mobi-3rd-bdgginer-3",
        },
        {
            title: "begginer 04",
            subTitle: "보일러 템플릿을 활용한 폴더 및 컴포넌트 구조 설계.txt",
            description: "최적화 및 suspense, errorBoundary 알아보기",
            link: "https://github.com/ijimlnosk/mobi-3rd-begginer-4",
            children: true,
            childrenTitle: "mobi-3rd-bdgginer-4",
        },
        {
            title: "To-Do List",
            description: "To-Do List 만들기",
            link: "https://github.com/ijimlnosk/mobi-3rd-todo",
            children: false,
        },
        {
            title: "typescript 01",
            description: "타입스크립트 개념에 대한 이해",
            link: "https://github.com/ijimlnosk/mobi-3rd-typescript-1",
            children: false,
        },
        {
            title: "typescript 02",
            description: "타입스크립트 개념에 대한 이해",
            link: "https://github.com/ijimlnosk/mobi-3rd-typescript-2",
            children: true,
            childrenTitle: "mobi-3rd-typescript-2",
        },
        {
            title: "next.js",
            description: "next.js의 개념 이해 및 사용해보기",
            link: "https://github.com/ijimlnosk/mobi-3rd-next.js",
            children: true,
            childrenTitle: "mobi-erd-next.js",
        },
        {
            title: "Mobi Study",
            subTitle: "mobi 내에서 참여한 스터디",
            description: "programmers 문제 풀이",
            link: "https://github.com/mobi-social/algomobi-3rd-2",
            children: true,
            childrenTitle: "Algomobi",
        },
    ],
}
