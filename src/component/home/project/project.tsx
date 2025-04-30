import { useProjectList } from "../../../hooks/useProjectList"
import { useProjectStore } from "../../../lib/zustand/projectStore"
import ProjectView from "./projectView"
import ToyProject from "./toyProject"

const Project = () => {
    const { data, isLoading, isError } = useProjectList()

    const page = useProjectStore(state => state.page)
    const nextPage = useProjectStore(state => state.nextPage)
    const prevPage = useProjectStore(state => state.prevPage)

    if (isLoading) <div>Loading...</div>
    if (isError) <div>프로젝트 데이터가 없습니다.</div>

    const prevActive = page > 0
    const nextActive = data ? page < data.length - 1 : false

    return (
        <>
            {data && (
                <div
                    className={`w-[1200px] h-full bg-white rounded-r-lg relative pb-4 pl-4 pr-3 ${data[page].id === 2 ? "overflow-y-auto" : ""}`}
                >
                    <div className="w-full h-full px-6">
                        <div className="w-full h-[50px] pt-4 flex flex-row mb-4 sticky top-0 bg-white">
                            <div className="flex-items flex-row text-2xl mr-4 gap-4 ">
                                <div
                                    className=" chevron chevron-left cursor-pointer"
                                    onClick={prevPage}
                                    style={
                                        {
                                            "--chevron-color": prevActive ? "#888" : "#d0d0d0",
                                        } as React.CSSProperties
                                    }
                                />
                                <div
                                    className=" chevron chevron-right cursor-pointer"
                                    onClick={() => nextPage(data ? data.length : 0)}
                                    style={
                                        {
                                            "--chevron-color": nextActive ? "#888" : "#d0d0d0",
                                        } as React.CSSProperties
                                    }
                                />
                            </div>
                            <p className="ml-4 text-2xl flex-items">Project {page + 1}</p>
                        </div>
                        {data && <ProjectView data={data[page]} />}
                        <div className="mt-[80px] h-[200px]">{data && data[page].id === 2 && <ToyProject />}</div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Project
