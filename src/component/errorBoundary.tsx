import { Component, ReactNode } from "react"

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(_: Error) {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <div>Something went wrong. Please try again later.</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary
