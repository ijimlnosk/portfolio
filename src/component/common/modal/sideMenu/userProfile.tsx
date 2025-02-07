import { UserProfileProps } from "./type"

const UserProfile = ({ userInfo, isSelected, setIsSelected }: UserProfileProps) => {
    return (
        <div
            onClick={() => setIsSelected(true)}
            className={`mt-6 w-full h-16 flex flex-row justify-start items-center gap-4 rounded-lg ${isSelected ? "bg-[#507277]" : ""} hover:bg-[#507277] py-2 pl-2 cursor-pointer`}
        >
            <div className="w-12 h-12 bg-white rounded-full ">
                <img src={userInfo.userProfile} className="rounded-full w-12 h-12" />
            </div>
            <div className={`w-24 h-full flex flex-col justify-center ${isSelected ? "text-white" : "text-black"}`}>
                <p className="font-semibold text-md">{userInfo.userName.split("").join(" ")}</p>
                <p className="font-light text-xs">{userInfo.position}</p>
            </div>
        </div>
    )
}
export default UserProfile
