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
    selectedView,
    setSelectedView,
}: SettingSideMenuProps) => {
    if (!userInfo) {
        return null
    }

    return (
        <div className="w-[25%] bg-[#e2e2e2] bg-opacity-80 backdrop-blur-md p-2 rounded-l-lg">
            <div className="flex flex-row gap-2 px-2 pt-2 pb-6">
                <Close onClose={onClose} />
                <Minimized isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            <div className="rounded-lg w-full h-7 bg-[#d5d5d5] " />
            <div className="h-[580px] xl:h-[780px] overflow-y-auto">
                <UserProfile userInfo={userInfo} selectedView={selectedView} setSelectedView={setSelectedView} />
                <PersonalInfo userInfo={userInfo} selectedView={selectedView} setSelectedView={setSelectedView} />
                <StudyTimeLine userInfo={userInfo} />
            </div>
        </div>
    )
}
export default SideMenu
