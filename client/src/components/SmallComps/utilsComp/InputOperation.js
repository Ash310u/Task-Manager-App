import { twMerge } from "tailwind-merge";

const InputOperation = ({className, ...rest }) => {
    return (
        <input
            type="text"
            placeholder="Add..."
            className={twMerge("outline-none select-none ml-6 text-gray-50 min-w-64 max-h-min bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 font-light rounded-lg p-3", className)}
            {...rest}
        />
    )
}

export default InputOperation;