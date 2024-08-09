import { RouterProvider } from "react-router-dom"
import router from "./lib/react-router-dom/route"
import LoadingWrapper from "./component/loadingWrapper"

const App = () => {
    return (
        <>
            <LoadingWrapper />
            <RouterProvider router={router} />
        </>
    )
}

export default App
