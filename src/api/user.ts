import axios from "axios"

export const getUserInfo = async () => {
    const response = await axios.get("/api/userInfo")
    return response.data
}
