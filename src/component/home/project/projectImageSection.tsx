import LazyLoad from "react-lazyload"
import { ProjectImageSectionProps } from "./type"

const ProjectImageSection = ({ oneLineIntroduction, image, id }: ProjectImageSectionProps) => {
    return (
        <div className="py-12">
            <div className="mb-4" dangerouslySetInnerHTML={{ __html: oneLineIntroduction }} />
            <div
                className={`max-w-[1160px] max-h-[52vh] min-h-[30vh] ${id === 1 ? "flex-items -ml-2" : "flex-center"}  flex-row`}
            >
                {image.map((image, index) => (
                    <div key={index}>
                        {id === 1 ? (
                            <LazyLoad height={200} offset={100} once={true}>
                                <div className={`${index === 0 ? "w-[500px]" : "w-[150px] "}`}>
                                    <img
                                        src={image}
                                        alt="이미지 파일"
                                        className={`${index === 0 ? "w-[500px]" : "w-[150px] "}`}
                                        style={{
                                            filter: "blur(20px)",
                                            transition: "filter 0.3s ease-out",
                                        }}
                                        onLoad={e => {
                                            const img = e.target as HTMLImageElement
                                            img.style.filter = "blur(0px)"
                                        }}
                                    />
                                </div>
                            </LazyLoad>
                        ) : (
                            <LazyLoad height={200} offset={100} once={true}>
                                <div key={index} className="w-[400px] h-52">
                                    <img
                                        src={image}
                                        alt="이미지 파일"
                                        width={400}
                                        height={200}
                                        style={{
                                            filter: "blur(20px)",
                                            transition: "filter 0.3s ease-out",
                                        }}
                                        onLoad={e => {
                                            const img = e.target as HTMLImageElement
                                            img.style.filter = "blur(0px)"
                                        }}
                                    />
                                </div>
                            </LazyLoad>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectImageSection
