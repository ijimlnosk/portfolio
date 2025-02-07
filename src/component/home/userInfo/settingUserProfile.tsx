export type SettingUserProfileProps = {
    profile?: string
    userName?: string
    email?: string
}

const SettingUserProfile = ({ profile, userName, email }: SettingUserProfileProps) => {
    return (
        <div className="w-full flex flex-col items-center ">
            <div className="w-32 h-32 rounded-full border border-[#d0d0d0]">
                <img src={profile} alt="profile image" className="w-32 rounded-full" />
            </div>
            <p className="text-2xl font-bold">{userName?.split("").join(" ")}</p>
            <p className="font-light text-sm">{email}</p>
        </div>
    )
}
export default SettingUserProfile
