import { ViewLayoutProps } from "./type"

const ViewLayout = ({ children }: ViewLayoutProps) => {
    return <div className="w-full h-screen pt-20 px-4">{children}</div>
}
export default ViewLayout
