import { twMerge } from "tailwind-merge";

const IconDiv = ({children, className, ...rest}) => {
    return (
        <div {...rest} className={twMerge("bg-black p-1.5 hover:bg-gray-800 rounded-lg outline-none", className)}>
            {children}
        </div>
    )
}

export default IconDiv;