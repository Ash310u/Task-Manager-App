import { useState } from "react";
import { BiSolidEditAlt, BiSolidAddToQueue } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { BiX } from "react-icons/bi";
import { useSelector } from "react-redux";
import IconDiv from "./utilsComp/IconDiv";
import InputOperation from "./utilsComp/InputOperation";
import { useCreateTopicTaskMutation, useDeleteTopicMutation, useUpdateTopicMutation } from "../../store";
import Box from "./Box";

const Panel = ({ topic_id }) => {
    // const dispatch = useDispatch()
    const { topics } = useSelector((state) => {
        return state.topicSlice
    })

    const topic = topics.filter((topic) => {
        return topic._id === topic_id
    })

    const [isEditVisible, setIsEditVisible] = useState(false)
    const [isInputVisible, setIsInputVisible] = useState(false)

    const [taskValue, setTaskValue] = useState('')
    const [newTopicValue, setNewTopicValue] = useState(topic[0]?.title)

    const authToken = window.localStorage.getItem('authToken')

    const [updateTopic] = useUpdateTopicMutation()
    const [deleteTopic] = useDeleteTopicMutation()
    const [createTopicTask] = useCreateTopicTaskMutation()

    const handleEditInput = () => {
        setIsEditVisible(curr => !curr)
        if (!isEditVisible) {
            setIsInputVisible(false)
        }
    }

    const handleTopicInputChange = (e) => {
        setNewTopicValue(e.target.value)
    }

    const handleTopicSubmitEnterPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (newTopicValue !== topic[0]?.title) {
                updateTopic({
                    authToken,
                    topic: {
                        _id: topic_id,
                        title: newTopicValue
                    }
                })
            }
            setIsEditVisible(false)
            setNewTopicValue('')
        }
    }

    const handleAddInput = () => {
        setIsInputVisible(curr => !curr)
        if (!isInputVisible) {
            setTaskValue('')
            setIsEditVisible(false)
        }
    }

    const handleTaskInputChange = (e) => {
        setTaskValue(e.target.value)
    }

    const handleTaskSubmitEnterPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            createTopicTask({
                authToken,
                topic_id: topic_id,
                task: {
                    description: taskValue
                }
            })
            setIsInputVisible(false)
            setTaskValue('')
        }
    }

    const handleDeleteTopic = () => {
        deleteTopic({
            authToken,
            topic_id: topic_id
        })
    }

    let tasks;
    if (topic?.tasks) {
        tasks = topic?.tasks.map((task) => {
            return <Box key={task._id} task={task} topic_id={topic_id} />
        })
    }


    return (
        <div className="w-72 m-1 flex flex-col">
            <div className="w-72 h-14 p-2 flex flex-row justify-between items-center select-none gap-1  bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg" >
                {
                    isEditVisible ?
                        <InputOperation
                            maxLength={30}
                            value={newTopicValue}
                            onChange={handleTopicInputChange}
                            onKeyPress={handleTopicSubmitEnterPress}
                            className={"min-w-40 ml-0 mr-1 p-1.5"}
                        />
                        : <h3 className="text-base font-light pl-1.5 pr-1.5 subpixel-antialiased break-words select-text overflow-hidden">{topic[0]?.title}</h3>
                }
                <div className="gap-1 flex flex-row justify-center items-center text-xl rounded-lg">
                    <IconDiv onClick={handleEditInput}>
                        {isEditVisible ? <BiX /> : <BiSolidEditAlt />}
                    </IconDiv>
                    <IconDiv onClick={handleAddInput}>
                        {isInputVisible ? <BiX /> : <BiSolidAddToQueue />}
                    </IconDiv>
                    <IconDiv onClick={handleDeleteTopic}>
                        <CgRemove />
                    </IconDiv>
                </div>
            </div>
            <div className="pb-4 pt-4 gap-2 flex flex-col items-center">
                {tasks}
                {isInputVisible && <InputOperation value={taskValue} onChange={handleTaskInputChange} onKeyPress={handleTaskSubmitEnterPress} />}
            </div>
        </div>
    )
}

export default Panel;