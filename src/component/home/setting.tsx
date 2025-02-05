import { useQuery } from "@tanstack/react-query"
import { getUserInfo } from "../../api/user"

const Setting = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["userData"],
        queryFn: getUserInfo,
    })

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>user data를 불러오는데 실패했습니다.</div>
    }

    return (
        <div className="w-full h-[740px] py-4 flex flex-row">
            <div>
                {data?.userName}
                <div>
                    <img src={data?.userProfile} alt="profile image" />
                </div>
            </div>
        </div>
    )
}
export default Setting
