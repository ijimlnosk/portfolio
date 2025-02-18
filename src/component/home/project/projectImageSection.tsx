import { ProjectImageSectionProps } from "./type"

const ProjectImageSection = ({ oneLineIntroduction, image }: ProjectImageSectionProps) => {
    return (
        <div className="py-12">
            <div className="mb-4" dangerouslySetInnerHTML={{ __html: oneLineIntroduction }} />
            <div className="max-w-[1160px] flex-center flex-row">
                {image.map((image, index) => (
                    <div key={index} className="w-[400px] h-52">
                        <img src={image} alt="이미지 파일" width={400} height={200} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectImageSection
