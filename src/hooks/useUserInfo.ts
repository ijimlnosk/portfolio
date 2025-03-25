import { useSuspenseQuery } from "@tanstack/react-query"
import { getUserInfo } from "../api/user"

export const useUserInfo = () => {
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: ["userData"],
        queryFn: getUserInfo,
    })

    return { data, isLoading, isError }
}
