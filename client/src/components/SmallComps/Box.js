import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import IconDiv from "./utilsComp/IconDiv";

const Box = ({ children, completed, onTaskCheckerUpdate }) => {
    const [isChecked, setIsChecked] = useState(completed)

    const handleChecked = () => {
        onTaskCheckerUpdate(!isChecked)
        setIsChecked(curr => !curr)
    }


    return (
        <div  className="max-w-72 max-h-min flex flex-row gap-1 text-base justify-center items-center select-none">
            <div className="bg-none text-lg text-gray-200 h-8 subpixel-antialiased rounded-full flex flex-col justify-center items-center" onClick={handleChecked} >
                {
                    isChecked ?
                        <FaCheck className="w-5 h-5 p-0.5 text-green-400 text-base opacity-90 rounded-lg bg-gray-200 hover:bg-gray-200 hover:bg-opacity-10 backdrop-blur-lg bg-opacity-30" />
                        : <IconDiv className='w-2 h-2 p-2.5 rounded-lg bg-gray-200 hover:bg-gray-200 hover:bg-opacity-10 backdrop-blur-lg bg-opacity-30' />
                }
            </div>
            <div className="min-w-64 max-h-min flex flex-row  items-center  bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg p-3 gap-2 overflow-hidden group ">
                <p className={twMerge(`font-thin text-gray-50 subpixel-antialiased break-words select-text`, isChecked && 'line-through')}>
                    {children}
                </p>
                <div className="absolute right-5 hidden group-hover:block text-gray-50">
                    <div className="gap-1 flex flex-row justify-center items-center text-xl rounded-lg">
                        <IconDiv>
                            <BiSolidEditAlt />
                        </IconDiv>
                        <IconDiv>
                            <BsThreeDots />
                        </IconDiv>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box;