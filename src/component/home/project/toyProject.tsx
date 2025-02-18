import { useToyProject } from "../../../hooks/useProjectList"

const ToyProject = () => {
    const { data, isLoading, isError } = useToyProject()

    if (isLoading) <div>Loading...</div>
    if (isError) <div>프로젝트 데이터가 없습니다.</div>

    return (
        <div className="-mt-24 h-[200px] ">
            <div>
                {data?.image.map((url, index) => <img key={index} src={url} alt="Logo" width={300} height={200} />)}
            </div>
        </div>
    )
}
export default ToyProject
