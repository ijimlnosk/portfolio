import Setting from "./setting"

export const renderModalContent = (skillTitle: string) => {
    switch (skillTitle) {
        case "Setting":
            return <Setting />
        default:
            return <div>{skillTitle}은 아직 준비되지 않았습니다.</div>
    }
}
