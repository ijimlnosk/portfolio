import { useQuery } from "@tanstack/react-query"
import { getSkillsAndTools } from "../api/skillApi"

export const useSkillsAndTools = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["skillsAndTools"],
        queryFn: getSkillsAndTools,
    })
    return { data, isLoading, isError }
}
