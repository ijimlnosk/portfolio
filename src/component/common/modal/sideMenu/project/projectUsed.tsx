import { ProjectSideItem } from "../../../../../mocks/data/type"

const ProjectUsed = ({ used }: ProjectSideItem) => {
    return (
        <div className="mt-16">
            <p className="text-xl">What did I Use</p>
            <p className="text-[8px] mb-4">프로젝트에서 사용한 도구 및 라이브러리 목록</p>
            {used?.map((item, index) => (
                <div key={index} className=" flex-items flex-row cursor-pointer hover:bg-[#507277] p-1 rounded-md">
                    <img src={item.image} alt="Logo" width={36} height={36} />
                    <div className="h-full ml-2 flex-justify flex-col ">
                        <div className="font-light text-[8px] -mb-1">{item.title}</div>
                        <div className="text-[12px]">{item.name}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProjectUsed
