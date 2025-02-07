import { InfoItemProps } from "./type"

const InfoItem = ({ icon, alt, children }: InfoItemProps) => {
    return (
        <div className="flex flex-row gap-1 p-1 items-center my-1 cursor-pointer rounded-lg hover:bg-[#507277] hover:text-white">
            <img src={icon} alt={alt} className="w-6" />
            <div className="text-[12px]">{children}</div>
        </div>
    )
}

export default InfoItem
