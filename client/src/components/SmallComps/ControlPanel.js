import StatusBox from "./StatusBox";
import EditInput from './EditInput'
import { stateAddTopic, useCreateTopicMutation } from "../../store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ControlPanel = ({ data }) => {
    const dispatch = useDispatch()
    const authToken = window.localStorage.getItem('authToken')

    const [createTopic, results] = useCreateTopicMutation()

    useEffect(() => {
        if(results.isSuccess) {
            dispatch(stateAddTopic(results.data))
        }
    },[results.data, dispatch])

    const handleAddTopic = (topic) => {
        createTopic({ authToken, topic })
    }
    // const statusContent = data.map((topic) => {
    //     const { title, _id } = topic;
    //     const completedTask = topic?.tasks.filter((task) => {
    //         return task.completed === true;
    //     })

    //     let taskCompletion
    //     completedTask.length !== 0 ? taskCompletion = Math.round((completedTask.length/topic.tasks.length) * 100) : taskCompletion = 0

    //     return (
    //         <StatusBox key={_id} percentage={taskCompletion}>
    //             {title}
    //         </StatusBox>
    //     )
    // })

    return (
        <div className="flex flex-row items-center justify-between bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 p-2.5 gap-4 rounded-2xl ">
            <div className="flex flex-row gap-2 overflow-auto items-center bg-opacity-40 rounded-3xl pr-3 pl-3 bg-gray-950 ">
                {/* {statusContent} */}
            </div>
            <div className="flex flex-row items-center  gap-1 bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 p-2 pr-1 pl-1 rounded-3xl" >
                <EditInput addTopic={handleAddTopic}/> 
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