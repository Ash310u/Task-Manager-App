import StatusBox from "./StatusBox";
import EditInput from './EditInput'

const ControlPanel = ({ addTopic, data }) => {

    const statusContent = data.map((topic) => {
        const { title, _id } = topic;
        const completedTask = topic?.tasks.filter((task) => {
            return task.completed === true;
        })

        let taskCompletion
        completedTask.length !== 0 ? taskCompletion = Math.round((completedTask.length/topic.tasks.length) * 100) : taskCompletion = 0

        return (
            <StatusBox key={_id} percentage={taskCompletion}>
                {title}
            </StatusBox>
        )
    })

    return (
        <div className="flex flex-row items-center justify-around bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 p-4 gap-4 rounded-2xl">
            <div className="flex flex-row gap-2 overflow-auto items-center bg-opacity-10 rounded-2xl">
                {statusContent}
            </div>
            <div className="flex flex-row items-center  gap-1 bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 pt-2 pb-2 pr-3 pl-3 rounded-2xl" >
                <EditInput addTopic={addTopic}/> 
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