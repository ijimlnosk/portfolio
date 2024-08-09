import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../../component/layout/layout"
import Home from "../../pages/home"
import Project from "../../pages/project"
import Skill from "../../pages/skill"
import About from "../../pages/about"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/project",
                element: <Project />,
            },
            {
                path: "/skill",
                element: <Skill />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
])
export default router
