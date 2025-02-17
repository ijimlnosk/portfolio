import ProjectCard from "./projectCard"
import { useQuery } from "@tanstack/react-query"
import { getProject } from "../../api/project"
import { ProjectMainItem } from "./type"

const ProjectList = () => {
    const {
        data: projects,
        isLoading,
        error,
    } = useQuery<ProjectMainItem[], Error>({
        queryKey: ["projects"],
        queryFn: getProject,
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!projects || projects.length === 0) return <div>No Project found</div>

    return (
        <div className="w-full h-screen overflow-x-auto">
            <div className=" w-full h-full inline-flex space-x-4 pl-[20%]"></div>
        </div>
    )
}
export default ProjectList
