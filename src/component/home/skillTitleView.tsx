import { SkillTitleViewProps } from "./type"

const SkillTitleView = ({ skillTitle }: SkillTitleViewProps) => {
    return (
        <div
            className=" absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-1 bg-[#BDC4E0] text-black text-sm rounded-lg
          whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200"
        >
            {skillTitle}
            <div
                className=" absolute inset-x-0 flex justify-center bottom-[-6px]
          "
            >
                <div className="w-0h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#BDC4E0]" />
            </div>
        </div>
    )
}
export default SkillTitleView
