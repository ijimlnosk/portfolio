import axios from "axios"
import { GetProjectResponse } from "./type"

export const getProject = async () => {
    const response = await axios.get<GetProjectResponse[]>("/api/projects")
    return response.data
}

export const getToyProject = async () => {
    const response = await axios.get<GetProjectResponse>("/api/toyProject")
    return response.data
}
