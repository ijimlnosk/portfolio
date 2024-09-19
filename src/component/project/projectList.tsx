import ProjectCard from "./projectCard"
import { useQuery } from "@tanstack/react-query"
import { ProjectItem } from "./type"
import { getProject } from "../../api/project"

const ProjectList = () => {
    const {
        data: projects,
        isLoading,
        error,
    } = useQuery<ProjectItem[], Error>({
        queryKey: ["projects"],
        queryFn: getProject,
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!projects || projects.length === 0) return <div>No Project found</div>

    return (
        <div className="w-full h-screen overflow-x-auto">
            <div className=" w-full h-full inline-flex space-x-4 p-4">
                {projects.map((item, index) => (
                    <div key={index} className=" w-full h-full flex-none pl-[12%]">
                        <ProjectCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectList
