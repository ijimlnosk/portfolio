import { ProjectRangeProps } from "./type"

const ProjectRange = ({ range, deploy, additionalRange }: ProjectRangeProps) => {
    return (
        <div className="flex-items felx-row text-xs text-[#888]">
            <p className="font-bold mr-6">range </p>
            <p>{range}</p>
            {deploy && (
                <>
                    <div className="w-[2px] h-4 mx-8 bg-[#888]" />
                    <p className="font-bold mr-6">depoly & refactor</p>
                    <p>{deploy}</p>
                </>
            )}
            {additionalRange && (
                <>
                    <div className="w-[2px] h-4 mx-8 bg-[#888]" />
                    <p className="font-bold mr-6">additional range</p>
                    <p>{additionalRange}</p>
                </>
            )}
        </div>
    )
}
export default ProjectRange
