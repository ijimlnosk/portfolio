import { DeveloperValue } from "../../../api/type"

export type DeveloperValuesProps = {
    developerValues?: DeveloperValue[]
}

const DeveloperValues = ({ developerValues }: DeveloperValuesProps) => {
    return (
        <div className="w-full h-[400px] mt-4 rounded-lg bg-[#F7F7F7] border border-[#E2E2E2] bg-opacity-90">
            <div className="w-full p-4">
                {developerValues?.map((item, index) => (
                    <div key={index} className="p-2">
                        <p className="font-bold text-2xl py-1">{item.title}</p>
                        <p className="text-xl font-normal">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default DeveloperValues
