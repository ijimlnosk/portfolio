import { ProjectImageSectionProps } from "./type"

const ProjectImageSection = ({ oneLineIntroduction, image, id }: ProjectImageSectionProps) => {
    return (
        <div className="py-12">
            <div className="mb-4" dangerouslySetInnerHTML={{ __html: oneLineIntroduction }} />
            <div className={`max-w-[1160px] ${id === 1 ? "flex-items -ml-2" : "flex-center"}  flex-row`}>
                {image.map((image, index) => (
                    <>
                        {id === 1 ? (
                            <div key={index} className={`${index === 0 ? "w-[500px]" : "w-[150px] "}`}>
                                <img
                                    src={image}
                                    alt="이미지 파일"
                                    className={`${index === 0 ? "w-[500px]" : "w-[150px] "}`}
                                />
                            </div>
                        ) : (
                            <div key={index} className="w-[400px] h-52">
                                <img src={image} alt="이미지 파일" width={400} height={200} />
                            </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}
export default ProjectImageSection
