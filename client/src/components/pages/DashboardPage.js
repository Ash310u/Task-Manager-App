import { useSelector } from "react-redux"
import Box from "../SmallComps/Box"
import ControlPanel from "../SmallComps/ControlPanel"
import Panel from "../SmallComps/Panel"
import { useCreateTopicMutation, useCreateTopicTaskMutation, useDeleteTopicMutation, useDeleteTopicTaskMutation, useFetchTopicQuery, useUpdateTopicMutation, useUpdateTopicTaskMutation } from "../../store"
import { useState } from "react"

const DashboardPage = () => {
    const [selectedTopicId, setSelectedTopicId] = useState('')

    const authToken = useSelector(state => {
        return state.userData.user?.token;
    })

    const { data, error, isSuccess } = useFetchTopicQuery(authToken)
    const [createTopic] = useCreateTopicMutation()
    const [updateTopic] = useUpdateTopicMutation()
    const [deleteTopic] = useDeleteTopicMutation()
    const [createTopicTask] = useCreateTopicTaskMutation()
    const [updateTopicTask] = useUpdateTopicTaskMutation()
    const [deleteTopicTask] = useDeleteTopicTaskMutation()

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
    const handleUpdateTopicTaskChecker = ({ topic_id, task_id, isChecked }) => {
        updateTopicTask({
            authToken,
            topic_id,
            task_id,
            task: {
                completed: isChecked
            }
        })
    }
    const handleUpdateTopicTask = ({ newDescription, oldDescription, topic_id, task_id }) => {
        if (newDescription.toLowerCase() !== oldDescription.toLowerCase()) {
            updateTopicTask({
                authToken,
                topic_id,
                task_id,
                task: {
                    description: newDescription,
                    completed: false,
                }
            })
        }
    }

    const handleDeleteTopic = (id) => {
        deleteTopic({
            authToken,
            topic_id: id
        })
    }
    const handleDeleteTopicTask = ({topic_id, task_id}) => {
        deleteTopicTask({
            authToken,
            topic_id,
            task_id
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
                    const task_id = task._id
                    return <Box key={task._id}
                        completed={task.completed}
                        onTaskCheckerUpdate={(isChecked) => handleUpdateTopicTaskChecker({ topic_id:id, task_id, isChecked })}
                        onTaskUpdate={(newDescription) => handleUpdateTopicTask({ topic_id:id, task_id, newDescription, oldDescription:task.description })}
                        onTaskDelete={() => handleDeleteTopicTask({ topic_id:id, task_id})}
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
                {isSuccess && <ControlPanel addTopic={handleAddTopic} data={data} />}
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