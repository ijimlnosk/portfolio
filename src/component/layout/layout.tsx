import { Outlet } from "react-router-dom"
import Header from "./header"

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default RootLayout
