import { BiSolidEditAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const Box = ({ children }) => {
    return (
        <div className={`max-w-80 max-h-min flex flex-row bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg p-3 m-3 gap-2 overflow-hidden group }`}>
            <p className='text-gray-50 w-80 subpixel-antialiased break-words'>
                {children}
            </p>
            <div className="absolute right-5 hidden group-hover:block text-gray-50">
                <div className="flex flex-row justify-center items-center text-xl rounded-lg">
                    <div className=" bg-black p-1.5 hover:bg-gray-800  rounded-l-lg">
                        <BiSolidEditAlt />
                    </div>
                    <div className=" bg-black p-1.5 hover:bg-gray-800  rounded-r-lg">
                        <BsThreeDots />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box;