import { useQuery } from "@tanstack/react-query"
import { getUserInfo } from "../../api/user"

const Setting = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["userData"],
        queryFn: getUserInfo,
    })

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>user data를 불러오는데 실패했습니다.</div>
    }

    return (
        <div className="w-[680px] h-full py-4 pl-4 pr-3 flex flex-row overflow-y-auto">
            <div className="w-full">
                <div className="flex flex-row">
                    <div className="flex flex-row">
                        <p></p>
                        <p></p>
                    </div>
                    <p className="text-2xl">FrontEnd Resume</p>
                </div>
                <div className="w-full flex flex-col items-center ">
                    <div className="w-52 rounded-full border border-[#d0d0d0]">
                        <img src={data?.userProfile} alt="profile image" className="w-52 rounded-full" />
                    </div>
                    <p className="text-[36px] font-bold">{data?.userName.split("").join(" ")}</p>
                    <p className="font-light text-lg">{data?.email}</p>
                </div>
                <div className="w-full h-[400px] mt-4 rounded-lg bg-[#F7F7F7] border border-[#E2E2E2] bg-opacity-90">
                    <div className="w-full p-4">
                        {data?.developerValues.map((item, index) => (
                            <div key={index} className="p-2">
                                <p className="font-bold text-2xl py-1">{item.title}</p>
                                <p className="text-xl font-normal">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-2">
                    <p className="text-2xl">more infomation</p>
                    <div className="bg-[#f7f7f7] bg-opacity-90 border border-[#e2e2e2] rounded-lg">
                        {data?.moreInfo.map((item, index) => (
                            <div key={index} className="flex flex-row px-4 py-2">
                                <img src={item.icon} alt={item.title} />
                                <div className="pl-4">
                                    <p>{item.nickName}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Setting
