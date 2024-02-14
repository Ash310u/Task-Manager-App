import { MdAdd } from "react-icons/md";

const ControlPanel = () => {
    return (
        <div className="flex flex-row justify-between items-center bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg p-5">
            <div className="p-3">
                more Controls
            </div>
            <div className="flex flex-row items-center gap-1 bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg pt-2 pb-2 pr-3 pl-3" >
                <button>New</button>
                <MdAdd className="text-lg"/>
            </div>
        </div>
    )
}

export default ControlPanel