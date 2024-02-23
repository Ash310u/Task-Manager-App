import { useState } from "react";
import { BiSolidEditAlt, BiSolidAddToQueue } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import IconDiv from "./utilsComp/IconDiv";

const Panel = ({ header, children, }) => {
    const [isInputVisible, setIsInputVisible] = useState(false)

    const handleAddInput = () => {
        setIsInputVisible(curr => !curr)
    }
    return (
        <div className="min-w-72 m-1">
            <div className="pt-2 pb-2 pl-1 pr-1 flex flex-row justify-between items-center select-none">
                <h3 className="text-lg">{header}</h3>
                <div className="gap-1 flex flex-row justify-center items-center text-xl rounded-lg">
                    <IconDiv>
                        <BiSolidEditAlt />
                    </IconDiv>
                    <IconDiv onClick={handleAddInput}>
                        {isInputVisible ? <BiX /> : <BiSolidAddToQueue />}
                    </IconDiv>
                    <IconDiv >
                        <BsThreeDots />
                    </IconDiv>
                </div>
            </div>
            <div className="pb-4 pt-4 gap-2 flex flex-col items-center">
                {children}
                {isInputVisible && <input type="text" placeholder="Add..." className="outline-none select-none ml-5 text-gray-50 min-w-64 max-h-min bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg p-3" />}
            </div>
        </div>
    )
}

export default Panel;