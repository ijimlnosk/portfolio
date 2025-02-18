import ProjectImageSection from "./projectImageSection"
import ProjectRange from "./projectRange"
import { ProjectViewProps } from "./type"

const ProjectView = ({ data }: ProjectViewProps) => {
    return (
        <div className="w-full h-full">
            <ProjectRange range={data.range} deploy={data.deploy} additionalRange={data.additionalRange} />
            <ProjectImageSection oneLineIntroduction={data.oneLineIntroduction} image={data.image} />
            <div className="w-full grid grid-cols-2 gap-20 py-2">
                <div className="w-[600px] flex flex-col">
                    {data.id === 2 && <p className="text-2xl text-[#e9e9e9] mb-2">for User Experience</p>}
                    {data.id === 3 && <p className="text-2xl text-[#e9e9e9] mt-12 mb-2">for Agile</p>}
                    <div dangerouslySetInnerHTML={{ __html: data.firstDescription }} />
                </div>
                <div className="w-full flex flex-col">
                    {data.id === 2 && <p className="text-2xl text-[#e9e9e9] mb-2">for Team Members</p>}
                    {data.id === 3 && <p className="text-2xl text-[#e9e9e9] mt-12 mb-2">What did I do</p>}
                    <div dangerouslySetInnerHTML={{ __html: data.secondDescription }} />
                </div>
            </div>
        </div>
    )
}
export default ProjectView
