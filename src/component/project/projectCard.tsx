import { ProjectCardProps } from "./type"

const ProjectCard = ({ item }: ProjectCardProps) => {
    const handleImageClick = () => {
        if (item.distributeLink) {
            window.open(item.distributeLink, "_blank", "noopener,noreferrer")
        }
    }

    return (
        <div className=" relative w-[90%] max-w-[1580px] h-[80%] max-h-[1000px] flex justify-center items-center">
            <div className=" absolute w-[1240px] top-4 flex justify-start items-center flex-row">
                <div className=" text-5xl ">{item.title}</div>
                <div className=" text-2xl px-4 pt-2">{item.subTitle}</div>
            </div>
            <div className="w-[1240px] h-[620px]  ">
                <img
                    src={item.thumbnail}
                    alt="thumbnail"
                    className="w-full h-full cursor-pointer hover:opacity-70"
                    onClick={handleImageClick}
                />
            </div>
            <div>{item.content}</div>
            <div className=" absolute top-8 right-0 px-4">프로젝트 기간 : {item.period}</div>

            <div className=" absolute bottom-20 flex flex-row">
                {item.skill.map((skill, index) => (
                    <div key={index} className="px-2">
                        {skill}
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center flex-row absolute bottom-0">
                {item.link.map((link, index) => (
                    <div key={index} className="px-4">
                        {link.title}
                        <div className="py-2 hover:bg-slate-500">
                            <a href={link.url}>{link.type}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectCard
