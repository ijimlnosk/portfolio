import { useSuspenseQuery } from "@tanstack/react-query"
import { getProject, getToyProject } from "../api/project"
import { GetProjectResponse } from "../api/type"

export const useProjectList = () => {
    const { data, isLoading, isError } = useSuspenseQuery<GetProjectResponse[]>({
        queryKey: ["projectList"],
        queryFn: getProject,
    })
    return { data, isLoading, isError }
}

export const useToyProject = () => {
    const { data, isLoading, isError } = useSuspenseQuery<GetProjectResponse>({
        queryKey: ["toyProjectList"],
        queryFn: getToyProject,
    })
    return { data, isLoading, isError }
}
