import UserInfo from "./userInfo/userInfo"

export const renderModalContent = (skillTitle: string) => {
    switch (skillTitle) {
        case "UserInfo":
            return <UserInfo />
        default:
            return <div>{skillTitle}은 아직 준비되지 않았습니다.</div>
    }
}
