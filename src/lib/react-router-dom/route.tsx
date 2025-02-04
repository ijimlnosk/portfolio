import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../../component/layout/layout"
import Home from "../../pages/home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
])
export default router
