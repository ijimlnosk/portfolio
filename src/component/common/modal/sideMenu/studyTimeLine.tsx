import { getUserInfoResponse } from "../../../../api/type"

export type StudyTimeLineProps = {
    userInfo: getUserInfoResponse
}

const StudyTimeLine = ({ userInfo }: StudyTimeLineProps) => {
    return (
        <div className="w-full">
            <div className="w-full my-6">
                <p>Study TimeLine</p>
                <p className="text-[8px]">프로젝트의 아이콘을 클릭 시 해당 레포지토리로 이동 가능</p>
            </div>
            <div className="w-full max-h-52 overflow-y-auto">
                {userInfo.studyTimeLine.map((item, index) => (
                    <div key={index} className="w-full h-6 my-[4px]">
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-2 items-center cursor-pointer text-xs hover:bg-[#507277] hover:text-white rounded-lg"
                        >
                            <img src={item.icon} alt={item.title} className="w-6" />
                            <p>{item.title}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default StudyTimeLine
