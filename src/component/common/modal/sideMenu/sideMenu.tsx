import Close from "../close"
import Minimized from "../minimized"
import PersonalInfo from "./personalInfo"
import StudyTimeLine from "./studyTimeLine"
import { SettingSideMenuProps } from "./type"
import UserProfile from "./userProfile"

const SideMenu = ({
    userInfo,
    onClose,
    isMinimized,
    setIsMinimized,
    isSelected,
    setIsSelected,
}: SettingSideMenuProps) => {
    if (!userInfo) {
        return null
    }

    return (
        <div className="w-[30%] bg-[#e2e2e2] bg-opacity-80 p-2 rounded-l-lg">
            <div className="flex flex-row gap-2 px-2 pt-2 pb-6">
                <Close onClose={onClose} />
                <Minimized isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
                <div className="w-[15px] h-[15px] bg-green-500 rounded-full" />
            </div>
            <div className="rounded-lg w-full h-7 bg-[#d5d5d5] " />
            <UserProfile userInfo={userInfo} isSelected={isSelected} setIsSelected={setIsSelected} />
            <PersonalInfo userInfo={userInfo} />
            <StudyTimeLine userInfo={userInfo} />
        </div>
    )
}
export default SideMenu
