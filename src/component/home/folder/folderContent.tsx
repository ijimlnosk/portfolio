import { ChevronDown, ChevronRight } from "lucide-react"
import { MobiItemResponse } from "../../../api/type"

export type FolderContentProps = {
    data?: MobiItemResponse
}

const FolderContent = ({ data }: FolderContentProps) => {
    return (
        <div className="w-[90%] text-xs ">
            {data?.contents.map((item, index) => (
                <div key={index}>
                    <div
                        className={`w-full ${item.subTitle ? "h-20" : item.children ? "h-[56px]" : "h-6"} my-1 flex flex-row justify-start items-start p-1 relative ${index % 2 === 0 ? "bg-[#f8f8f8]" : ""}`}
                    >
                        {item.children ? <ChevronDown color="#ebebeb" /> : <ChevronRight color="#ebebeb" />}
                        <img src={data.image} alt="folder image" width={24} height={24} />
                        <div className={`w-full flex flex-row justify-between `}>
                            {item.children ? (
                                <p>{item.title}</p>
                            ) : (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className=" underline">
                                    {item.title}
                                </a>
                            )}
                            {!item.children && <div className="text-[#999]">{item.description}</div>}
                        </div>
                        {item.children && (
                            <div>
                                <div className=" absolute w-[90%] top-8 left-[52px] flex flex-row justify-between ">
                                    <div>{item.subTitle}</div>
                                    <div className="text-[#999]">{item.description}</div>
                                </div>
                                {/* children */}
                                <div
                                    className={`flex flex-row items-center absolute ${item.subTitle ? " top-[56px]" : "top-8"}  left-[52px]`}
                                >
                                    <ChevronRight color="#ebebeb" />
                                    <img src={data.image} alt="folder image" width={24} height={24} />
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#091673] underline"
                                    >
                                        {item.childrenTitle}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default FolderContent
