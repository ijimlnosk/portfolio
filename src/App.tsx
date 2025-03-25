import { RouterProvider } from "react-router-dom"
import router from "./lib/react-router-dom/route"
import { Suspense } from "react"
import ErrorBoundary from "./component/errorBoundary"
import Loading from "./component/loading"
import LoadingWrapper from "./component/loadingWrapper"

const App = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <LoadingWrapper>
                    <RouterProvider router={router} />
                </LoadingWrapper>
            </Suspense>
        </ErrorBoundary>
    )
}

export default App
