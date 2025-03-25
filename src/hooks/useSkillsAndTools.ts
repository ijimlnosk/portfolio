import { useSuspenseQuery } from "@tanstack/react-query"
import { getSkillsAndTools } from "../api/skillApi"

export const useSkillsAndTools = () => {
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: ["skillsAndTools"],
        queryFn: getSkillsAndTools,
    })
    return { data, isLoading, isError }
}
