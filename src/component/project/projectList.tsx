import ProjectCard from "./projectCard"

const ProjectList = () => {
    const projectArr = ["1", "2", "3", "4", "5"]

    return (
        <div className="w-full h-screen overflow-x-auto">
            <div className=" w-full h-full inline-flex space-x-4 p-4">
                {projectArr.map((item, index) => (
                    <div key={index} className=" w-full h-full flex-none pl-[12%]">
                        <ProjectCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectList
