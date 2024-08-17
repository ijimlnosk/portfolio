type ProjectCard = {
    item: string
}

const ProjectCard = ({ item }: ProjectCard) => {
    return (
        <div className=" w-[90%] max-w-[1580px] h-[70%] max-h-[900px] flex justify-center items-center border-2 border-white">
            <div>{item}</div>
        </div>
    )
}
export default ProjectCard
