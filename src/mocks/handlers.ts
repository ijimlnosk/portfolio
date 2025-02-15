import { http, HttpResponse } from "msw"
import { mockUserInfo } from "./data/mockUserInfo"
import { mockProjects } from "./data/mockProjectData"
import { mockSkillsAndToolsData } from "./data/mockSkillAndToolsData"

export const handlers = [
    // project data
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

    // user info data
    http.get("/api/userInfo", () => {
        return HttpResponse.json(mockUserInfo)
    }),

    //skills and tools data
    http.get("/api/skillsAndTools", () => {
        return HttpResponse.json(mockSkillsAndToolsData)
    }),
]
