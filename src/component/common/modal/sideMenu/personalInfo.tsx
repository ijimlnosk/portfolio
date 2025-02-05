import { getUserInfoResponse } from "../../../../api/type"
import InfoItem from "./infoItem"

export type PersonalInfoProps = {
    userInfo: getUserInfoResponse
}

const PersonalInfo = ({ userInfo }: PersonalInfoProps) => {
    return (
        <div className="mt-6">
            <h2 className="mb-6 text-lg">Personal Information</h2>
            <div className="space-y-2">
                <InfoItem icon="/assets/icon/PhoneIcon.svg" alt="Phone">
                    {userInfo.phoneNumber}
                </InfoItem>
                <InfoItem icon="/assets/icon/BirthdayIcon.svg" alt="Birthday">
                    {userInfo.birthday}
                </InfoItem>
                <InfoItem icon="/assets/icon/UniversityIcon.svg" alt="University">
                    <div className="flex flex-row gap-1">
                        <span>{userInfo.university}</span>
                        <span>{userInfo.major}</span>
                    </div>
                </InfoItem>
                <InfoItem icon="/assets/icon/SkillToolIcon.svg" alt="Skills and Tools">
                    SkillsAndTools
                </InfoItem>
            </div>
        </div>
    )
}

export default PersonalInfo
