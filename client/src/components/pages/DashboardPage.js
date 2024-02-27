import { useSelector } from "react-redux"
import Box from "../SmallComps/Box"
import ControlPanel from "../SmallComps/ControlPanel"
import Panel from "../SmallComps/Panel"
import { useCreateTopicMutation, useCreateTopicTaskMutation, useDeleteTopicMutation, useFetchTopicQuery, useUpdateTopicMutation, useUpdateTopicTaskMutation } from "../../store"
import { useState } from "react"

const DashboardPage = () => {
    const [selectedTopicId, setSelectedTopicId] = useState('')
    const [selectedTaskId, setSelectedTaskId] = useState('')

    const authToken = useSelector(state => {
        return state.userData.user?.token;
    })

    const { data, error, isSuccess } = useFetchTopicQuery(authToken)
    const [createTopic] = useCreateTopicMutation()
    const [updateTopic] = useUpdateTopicMutation()
    const [deleteTopic] = useDeleteTopicMutation()
    const [createTopicTask] = useCreateTopicTaskMutation()
    const [updateTopicTask] = useUpdateTopicTaskMutation()

    const handleAddTopic = (topic) => {
        createTopic({ authToken, topic })
    }
    const handleAddTopicTask = (value) => {
        createTopicTask({
            authToken,
            topic_id: selectedTopicId,
            task: {
                description: value
            }
        })
    }

    const handleUpdateTopic = ({ newTopicValue, oldTopicValue }) => {
        if (newTopicValue.toLowerCase() !== oldTopicValue.toLowerCase()) {
            updateTopic({
                authToken,
                topic: {
                    _id: selectedTopicId,
                    title: newTopicValue
                }
            })
        }
    }
    const handleUpdateTopicTaskChecker = ({topic_id, isChecked}) => {
        updateTopicTask({
            authToken,
            topic_id,
            task_id: selectedTaskId,
            task: {
                completed: isChecked
            }
        })
    }
    
    const handleDeleteTopic = (id) => {
        deleteTopic({
            authToken,
            topic_id: id
        })
    }

    let content;
    if (error) {
        content = <div className="text-5xl opacity-50">404 Error</div>
    }

    if (isSuccess) {
        content = data.map((topic) => {
            const id = topic?._id
            const title = topic?.title
            let tasks;
            if (topic.tasks) {
                tasks = topic?.tasks.map((task) => {
                    return <Box key={task._id}
                        completed={task.completed}
                        onClick={() => setSelectedTaskId(task._id)}
                        onTaskCheckerUpdate={(isChecked) => handleUpdateTopicTaskChecker({topic_id:id, isChecked})}
                    >
                        {task.description}
                    </Box>
                })
            }
            return (
                <Panel key={id} header={title}
                    onClick={() => setSelectedTopicId(id)}
                    onTaskSubmit={handleAddTopicTask}
                    onTopicUpdate={handleUpdateTopic}
                    onTopicDelete={() => handleDeleteTopic(id)}
                >
                    {tasks}
                </Panel>
            )
        })
    }

    return (
        <div className="w-screen h-screen flex flex-col p-10 backdrop-blur text-white overflow-auto">
            <div className="m-5">
                <ControlPanel addTopic={handleAddTopic} />
            </div>
            <div className="flex flex-row flex-4 gap-10 m-10 pl-10 pr-10 overflow-auto">
                {content}
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

export default DashboardPage