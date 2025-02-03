import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
})

async function prepare() {
    const { worker } = await import("./mocks/browser")
    return worker.start({
        onUnhandledRequest: "bypass", // MSW에서 처리하지 않는 요청은 무시
    })
}

prepare().then(() => {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <DndProvider backend={HTML5Backend}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </DndProvider>
        </StrictMode>,
    )
})
