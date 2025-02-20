import { useQuery } from "@tanstack/react-query"
import { getMobi } from "../../../api/folder"
import FolderContent from "./folderContent"

const FolderView = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["mobiData"],
        queryFn: getMobi,
    })

    console.log(data)

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>모비 데이터가 없습니다.</div>

    return (
        <div className="w-full h-full bg-white bg-opacity-80 backdrop-blur-md rounded-r-lg overflow-y-auto">
            <div className="w-full h-[50px] pt-4 flex-items flex-row pb-4 sticky top-0 bg-[#f5f5f5] z-50">
                <div className="flex flex-row text-xl items-center mr-4 pl-4 gap-4 ">
                    <div className=" chevron chevron-left cursor-pointer " />
                    <div className=" chevron chevron-right cursor-pointer" />
                    <p className="text-lg">Mobi</p>
                </div>
            </div>
            <div className="w-full flex-center flex-col mt-4">
                <div className="w-[90%] pb-2 border-b-[1px] flex flex-row justify-between">
                    <div>{data?.title}</div>
                    <a
                        href={data?.titleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" underline text-[#091673] text-sm"
                    >
                        모비 회고 읽기
                    </a>
                </div>
                <FolderContent data={data} />
            </div>
        </div>
    )
}
export default FolderView
