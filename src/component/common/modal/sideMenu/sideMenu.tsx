import Close from "../close"
import Minimized from "../minimized"
import ProjectSideMenu from "./projectSideMenu"
import { SettingSideMenuProps } from "./type"
import UserInfoSideMenu from "./userInfoSideMenu"

const SideMenu = ({
    userInfo,
    onClose,
    isMinimized,
    setIsMinimized,
    selectedView,
    setSelectedView,
    skillTitle,
}: SettingSideMenuProps) => {
    if (!userInfo) {
        return null
    }

    return (
        <div
            className={`${skillTitle === "Project" ? "w-[16%]" : "w-[25%]"} bg-[#e2e2e2] bg-opacity-60 backdrop-blur-md p-2 rounded-l-lg`}
        >
            <div className="flex flex-row gap-2 px-2 pt-2 pb-6">
                <Close onClose={onClose} />
                <Minimized isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            {/* user info의 side menu 내용 */}
            {skillTitle === "UserInfo" && (
                <UserInfoSideMenu userInfo={userInfo} selectedView={selectedView} setSelectedView={setSelectedView} />
            )}
            {skillTitle === "Project" && <ProjectSideMenu />}
        </div>
    )
}
export default SideMenu
