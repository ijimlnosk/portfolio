export type ProjectProfileProps = {
    thumbnail: string
    title: string
    subTitle: string
}

const ProjectProfile = ({ thumbnail, title, subTitle }: ProjectProfileProps) => {
    return (
        <div
            className={`mt-6 w-full h-16 flex flex-row justify-start items-center gap-4 rounded-lg bg-[#507277] hover:bg-[#507277] py-2 pl-2 cursor-pointer`}
        >
            <div className="w-12 h-12 bg-white rounded-full ">
                <img src={thumbnail} className="rounded-full w-12 h-12 " />
            </div>
            <div className="w-32 h-full flex flex-col justify-center hover:text-white text-white">
                <p className="text-md">{title}</p>
                <p className="font-light text-[12px]">{subTitle}</p>
            </div>
        </div>
    )
}
export default ProjectProfile
