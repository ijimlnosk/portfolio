import Close from "../close"
import Minimized from "../minimized"
import FolderSideMenu from "./folder/folderSideMenu"
import ProjectSideMenu from "./project/projectSideMenu"
import { SettingSideMenuProps } from "./type"
import UserInfoSideMenu from "./userInfoSideMenu"

const SideMenu = ({
    userInfo,
    onClose,
    isMinimized,
    setIsMinimized,
    selectedView,
    setSelectedView,
    type,
}: SettingSideMenuProps) => {
    return (
        <div
            className={`${type === "project" ? "w-[17%]" : "w-[25%]"} ${type === "mobi" ? "bg-white bg-opacity-80" : "bg-[#e2e2e2]"}  bg-opacity-60 backdrop-blur-md p-2 rounded-l-lg`}
        >
            <div className="flex flex-row gap-2 px-2 pt-2 pb-6">
                <Close onClose={onClose} />
                <Minimized isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="border h-[90%]">
                {/* user info의 side menu 내용 */}
                {userInfo && type === "kimjinsol" && (
                    <UserInfoSideMenu
                        userInfo={userInfo}
                        selectedView={selectedView}
                        setSelectedView={setSelectedView}
                    />
                )}
                {/* project의 side menu 내용 */}
                {type === "projects" && <ProjectSideMenu />}
                {type === "mobi" && <FolderSideMenu />}
            </div>
        </div>
    )
}
export default SideMenu
