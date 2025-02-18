import { useQuery } from "@tanstack/react-query"
import { getProject, getToyProject } from "../api/project"
import { GetProjectResponse } from "../api/type"

export const useProjectList = () => {
    const { data, isLoading, isError } = useQuery<GetProjectResponse[]>({
        queryKey: ["projectList"],
        queryFn: getProject,
    })
    return { data, isLoading, isError }
}

export const useToyProject = () => {
    const { data, isLoading, isError } = useQuery<GetProjectResponse>({
        queryKey: ["toyProjectList"],
        queryFn: getToyProject,
    })
    return { data, isLoading, isError }
}
