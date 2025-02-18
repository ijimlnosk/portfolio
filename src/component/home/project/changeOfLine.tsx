import { changeOfLineProps } from "./type"

export const ChangeOfLine = ({ text }: changeOfLineProps) => {
    return text.split(".").map((sentence, index, arr) => (
        <span key={index}>
            {sentence}
            {index < arr.length - 1 && "."}
            <br />
            <br />
        </span>
    ))
}
