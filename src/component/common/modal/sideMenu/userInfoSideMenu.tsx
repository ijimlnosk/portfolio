import PersonalInfo from "./personalInfo"
import StudyTimeLine from "./studyTimeLine"
import { UserInfoSideMenuProps } from "./type"
import UserProfile from "./userProfile"

const UserInfoSideMenu = ({ userInfo, selectedView, setSelectedView }: UserInfoSideMenuProps) => {
    return (
        <>
            <div className="rounded-lg w-full h-7 bg-[#d5d5d5] " />
            <div className="h-[580px] xl:h-[780px] overflow-y-auto">
                <UserProfile userInfo={userInfo} selectedView={selectedView} setSelectedView={setSelectedView} />
                <PersonalInfo userInfo={userInfo} selectedView={selectedView} setSelectedView={setSelectedView} />
                <StudyTimeLine userInfo={userInfo} />
            </div>
        </>
    )
}
export default UserInfoSideMenu
