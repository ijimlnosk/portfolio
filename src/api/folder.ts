import axios from "axios"
import { MobiItemResponse } from "./type"

export const getMobi = async () => {
    const response = await axios.get<MobiItemResponse>("/api/mobi")
    return response.data
}
