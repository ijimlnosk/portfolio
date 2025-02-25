import { useProjectList, useToyProject } from "../../../../../hooks/useProjectList"
import { useProjectStore } from "../../../../../lib/zustand/projectStore"
import ProjectInfo from "./projectInfo"
import ProjectProfile from "./projectProfile"
import ProjectUsed from "./projectUsed"

const ProjectSideMenu = () => {
    const { data, isLoading, isError } = useProjectList()
    const { data: toyData } = useToyProject()

    const page = useProjectStore(state => state.page)

    if (isLoading) <div>Loading...</div>
    if (isError) <div>프로젝트 데이터가 없습니다.</div>

    return (
        <div className="h-[600px] 2xl:h-[700px] overflow-y-auto">
            {data && (
                <div>
                    <div className="rounded-lg w-full h-7 bg-[#d5d5d5] " />
                    <ProjectProfile
                        thumbnail={data[page].thumbNail}
                        title={data[page].title}
                        subTitle={data[page].subTitle}
                    />
                    <ProjectInfo projectInfomation={data[page].projectSideMenu.projectInfomation} />
                    <ProjectUsed used={data[page].projectSideMenu.used} />
                </div>
            )}
            {data && data[page].id === 2 && (
                <ProjectInfo projectInfomation={toyData?.projectSideMenu.projectInfomation} />
            )}
        </div>
    )
}
export default ProjectSideMenu
