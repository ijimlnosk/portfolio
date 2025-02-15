import { useSelectedViewStore } from "../../lib/zustand/selectedViewStore"
import SkillsAndTools from "../skillsAndTools/skillsAndTools"
import UserInfo from "./userInfo/userInfo"

const Setting = () => {
    const { selectedView } = useSelectedViewStore()

    return (
        <div className="w-full h-full bg-white rounded-r-lg">
            {selectedView === "userInfo" && <UserInfo />}
            {selectedView === "skillsAndTools" && <SkillsAndTools />}
        </div>
    )
}
export default Setting
