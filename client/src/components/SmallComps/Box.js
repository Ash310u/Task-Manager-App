import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import IconDiv from "./utilsComp/IconDiv";

const Box = ({ children }) => {
    const [isChecked, setIsChecked] = useState(false)
    
    const handleChecked = () => {
        setIsChecked((curr) => {
            return !curr;
        })
    }

    return (
        <div className="max-w-72 max-h-min flex flex-row gap-1 text-base justify-center items-center select-none">
            <div onClick={handleChecked} className="bg-none text-lg text-gray-200 h-8 subpixel-antialiased rounded-full flex flex-col justify-center items-center">
                { isChecked ? <RiCheckboxBlankCircleFill /> : <RiCheckboxBlankCircleLine />}
            </div>
            <div className="min-w-64 max-h-min flex flex-row  items-center  bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg p-3 gap-2 overflow-hidden group ">
                <p className="text-gray-50 subpixel-antialiased break-words select-text ">
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