import SettingUserProfile from "../home/userInfo/settingUserProfile"
import { useSkillsAndTools } from "../../hooks/useSkillsAndTools"
import { useUserInfo } from "../../hooks/useUserInfo"
import { SkillsAndToolsItem } from "../../api/type"
import SkillsView from "./skillsView"
import { separateSkillData } from "../../utils/separateSkillData"

const SkillsAndTools = () => {
    const { data, isLoading, isError } = useSkillsAndTools()
    const { data: userInfoData } = useUserInfo()

    if (isLoading) <div>Loading...</div>
    if (isError) <div>스킬 데이터가 없습니다.</div>

    const skillData = (data || {}) as Record<string, SkillsAndToolsItem[]>

    const horizontalCategories = ["UIKit", "Networking"]

    const { horizontalData, otherData } = separateSkillData(skillData, horizontalCategories)

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
                <SettingUserProfile
                    profile={userInfoData?.userProfile}
                    userName={userInfoData?.userName}
                    email={userInfoData?.email}
                />
                <div className="mt-10">
                    <SkillsView data={otherData} />
                    <SkillsView data={horizontalData} layout="horizontal" />
                </div>
            </div>
        </div>
    )
}
export default SkillsAndTools
