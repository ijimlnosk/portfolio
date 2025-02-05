import { getUserInfoResponse } from "../../../../api/type"

export type UserProfileProps = {
    userInfo: getUserInfoResponse
    isSelected: boolean
    setIsSelected: (isSelected: boolean) => void
}

const UserProfile = ({ userInfo, isSelected, setIsSelected }: UserProfileProps) => {
    return (
        <div
            onClick={() => setIsSelected(true)}
            className={`mt-6 w-full h-24 flex flex-row justify-center items-center gap-4 rounded-lg ${isSelected ? "bg-[#507277]" : ""} hover:bg-[#507277] py-2 pl-2 cursor-pointer`}
        >
            <div className="w-20 h-20 bg-white rounded-full ">
                <img src={userInfo.userProfile} className="rounded-full w-20 h-20" />
            </div>
            <div
                className={`w-24 h-full flex flex-col gap-1 justify-center ${isSelected ? "text-white" : "text-black"}`}
            >
                <p className="font-semibold text-md">{userInfo.userName.split("").join(" ")}</p>
                <p className="font-light text-xs">{userInfo.position}</p>
            </div>
        </div>
    )
}
export default UserProfile
