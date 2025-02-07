import { MoreInfo } from "../../../api/type"

export type MoreInfoComponentProps = {
    moreInfos?: MoreInfo[]
}

const MoreInfoComponent = ({ moreInfos }: MoreInfoComponentProps) => {
    return (
        <div className="py-4 ">
            <p className="text-lg mb-2">more infomation</p>
            <div className="bg-[#f7f7f7] bg-opacity-90 border border-[#e2e2e2] rounded-lg relative">
                {moreInfos?.map((item, index) => (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="flex flex-row px-4 py-2 justify-between items-center"
                    >
                        <div className="flex flex-row items-center">
                            <img src={item.icon} alt={item.title} className="w-8 h-8" />
                            <div className="pl-4">
                                <p className="text-md">{item.nickName}</p>
                                <p className="text-xs text-gray-400">{item.description}</p>
                            </div>
                        </div>
                        <div className="chevron chevron-right " />
                    </a>
                ))}
                <div className="w-full border-t-[1px] border-[#e2e2e2] absolute top-1/2" />
            </div>
        </div>
    )
}

export default MoreInfoComponent
