import axios from "axios"
import { getSkillsAndToolsResponse } from "./type"

export const getSkillsAndTools = async () => {
    const response = await axios.get<getSkillsAndToolsResponse>("/api/skillsAndTools")
    return response.data
}
