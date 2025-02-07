import { useQuery } from "@tanstack/react-query"
import { getUserInfo } from "../../../api/user"
import SettingUserProfile from "./settingUserProfile"
import DeveloperValues from "./developerValues"
import MoreInfoComponent from "./moreInfoComponent"

const UserInfo = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["userData"],
        queryFn: getUserInfo,
    })

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError && !data) {
        return <div>user data를 불러오는데 실패했습니다.</div>
    }

    return (
        <div className="w-full h-full bg-white rounded-r-lg relative pb-4 pl-4 pr-3 flex flex-row overflow-y-auto">
            <div className="w-full">
                <div className="w-full h-[50px] pt-4 flex flex-row mb-4 sticky top-0 bg-white">
                    <div className="flex flex-row text-2xl items-center mr-4 gap-4 ">
                        <div className=" chevron chevron-left cursor-pointer " />
                        <div className=" chevron chevron-right cursor-pointer" />
                    </div>
                    <p className="text-lg">FrontEnd Resume</p>
                </div>
                <SettingUserProfile profile={data?.userProfile} userName={data?.userName} email={data?.email} />
                <DeveloperValues developerValues={data?.developerValues} />
                <MoreInfoComponent moreInfos={data?.moreInfo} />
            </div>
        </div>
    )
}
export default UserInfo
