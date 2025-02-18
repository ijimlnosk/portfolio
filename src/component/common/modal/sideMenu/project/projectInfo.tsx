import { ProjectSideItem } from "../../../../../mocks/data/type"

const ProjectInfo = ({ projectInfomation }: ProjectSideItem) => {
    return (
        <div className="w-full h-[300px] mt-12 flex flex-col">
            <p className="text-xl mb-1">Project Infomation</p>
            <p className="text-[8px] mb-4">아이콘을 클릭 시 관련 페이지로 이동 가능</p>
            {projectInfomation?.map((item, index) => (
                <div key={index} className=" flex-items flex-row cursor-pointer hover:bg-[#507277] p-1 rounded-md">
                    <img src={item.image} alt="Logo" width={36} height={36} />
                    <div className="h-full ml-2 flex-justify flex-col ">
                        <div className="font-light text-[8px] -mb-1">{item.name}</div>
                        <div className="text-[12px]">{item.text}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProjectInfo
