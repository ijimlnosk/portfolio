import ProjectImageSection from "./projectImageSection"
import ProjectRange from "./projectRange"
import { ProjectViewProps } from "./type"

const ProjectView = ({ data }: ProjectViewProps) => {
    return (
        <div className="w-full h-[90%]">
            <ProjectRange range={data.range} deploy={data.deploy} additionalRange={data.additionalRange} />
            <ProjectImageSection oneLineIntroduction={data.oneLineIntroduction} image={data.image} id={data.id} />
            <div className={`w-full h-[calc(100vh-800px)] ${data.id === 1 ? "" : "grid grid-cols-2 gap-20"} py-2`}>
                <div className={`${data.id === 1 ? "w-full" : "w-[600px]"} flex flex-col`}>
                    {data.id === 1 && <p className="text-2xl text-[#e9e9e9] mb-2">Project Introduction</p>}
                    {data.id === 2 && <p className="text-2xl text-[#e9e9e9] mb-2">for User Experience</p>}
                    {data.id === 3 && <p className="text-2xl text-[#e9e9e9] mt-12 mb-2">for Agile</p>}
                    <div dangerouslySetInnerHTML={{ __html: data.firstDescription }} />
                </div>
                {data.id !== 1 && (
                    <div className="w-full flex flex-col overflow-y-auto max-h-full">
                        {data.id === 2 && <p className="text-2xl text-[#e9e9e9] mb-2">for Team Members</p>}
                        {data.id === 3 && <p className="text-2xl text-[#e9e9e9] mt-12 mb-2">What did I do</p>}
                        <div className="max-h-full" dangerouslySetInnerHTML={{ __html: data.secondDescription }} />
                    </div>
                )}
            </div>
        </div>
    )
}
export default ProjectView
