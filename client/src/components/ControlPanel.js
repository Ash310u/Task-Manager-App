import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { useCreateTopicMutation } from "../store/index";
import StatusBox from "./StatusBox";
import EditInput from './EditInput'

const ControlPanel = () => {
    const [ createTopic, results] = useCreateTopicMutation()
    const [isInput, setIsInput] = useState(false)
    const handleSubmit = (topic) => {
        createTopic(topic) 
        console.log(results)
    }
    return (
        <div className="flex flex-row items-center justify-around bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg p-4 gap-4">
            <div className="pr-3 pl-3 pt-1 pb-1 flex flex-row gap-2 overflow-auto items-center bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg">
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
               
            </div>
            <div onClick={() => setIsInput(true)}
                className="flex flex-row items-center  gap-1 bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg pt-2 pb-2 pr-3 pl-3 " >
                {isInput ? <EditInput setIsInput={setIsInput} onSubmit={handleSubmit} ></EditInput> : <button>New</button> && <MdAdd className="text-lg" />}
            </div>
            {/* Style for hiding the scroll bar */}
            <style>
                {`
                    .overflow-auto::-webkit-scrollbar {
                        width: 0 !important;
                    }
                    .overflow-auto {
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                `}
            </style>
        </div>
    )
}

export default ControlPanel