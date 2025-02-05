import axios from "axios"
import { getUserInfoResponse } from "./type"

export const getUserInfo = async () => {
    const response = await axios.get<getUserInfoResponse>("/api/userInfo")
    return response.data
}
