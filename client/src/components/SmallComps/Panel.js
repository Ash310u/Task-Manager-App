import { BiSolidEditAlt, BiSolidAddToQueue, } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const Panel = ({ header, children }) => {
    return (
        <div className="w-80 m-1">
            <div className="pl-4 pr-4 pt-2 pb-2 flex flex-row justify-between items-center">
                <h3 className="pl-1 pr-1 text-lg">{header}</h3>
                <div className="flex flex-row justify-center items-center text-xl rounded-lg">
                    <div className=" bg-black p-1.5 hover:bg-gray-800  rounded-l-lg">
                        <BiSolidEditAlt />
                    </div>
                    <div className=" bg-black p-1.5 hover:bg-gray-800">
                        <BiSolidAddToQueue />
                    </div>
                    <div className=" bg-black p-1.5 hover:bg-gray-800  rounded-r-lg">
                        <BsThreeDots />
                    </div>
                </div>
            </div>
            <div className="pb-4 pt-4 gap-2 flex flex-col items-center">
                {children}
            </div>
        </div>
    )
}

export default Panel;