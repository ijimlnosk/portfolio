import axios from "axios"

export const getProject = async () => {
    const response = await axios.get("/api/projects")
    return await response.data
}
