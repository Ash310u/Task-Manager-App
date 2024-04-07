import { useEffect, useState } from "react";
import { BiSolidEditAlt, BiSolidAddToQueue } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import IconDiv from "./utilsComp/IconDiv";
import InputOperation from "./utilsComp/InputOperation";
import { useCreateTaskMutation, stateUpdateTopic, stateRemoveTopic, useDeleteTopicMutation, useUpdateTopicMutation, stateCreateTask } from "../../store";
import Box from "./Box";

const Panel = ({ topic }) => {
    const [isEditVisible, setIsEditVisible] = useState(false)
    const [isInputVisible, setIsInputVisible] = useState(false)

    const dispatch = useDispatch()

    const { tasks } = useSelector((state) => {
        return state.taskSlice
    })
    const filteredTask = tasks.filter((task) => {
        return task.parent_id === topic._id
    })

    const [taskValue, setTaskValue] = useState('')
    const [newTopicValue, setNewTopicValue] = useState(topic.title)

    const authToken = window.localStorage.getItem('authToken')

    const [updateTopic, updateResults] = useUpdateTopicMutation()
    const [deleteTopic, deleteResults] = useDeleteTopicMutation()
    const [createTask, createResults] = useCreateTaskMutation()
    
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
            if (newTopicValue !== topic.title) {
                updateTopic({
                    authToken,
                    topic: {
                        _id: topic._id,
                        title: newTopicValue
                    }
                })
            }
            setIsEditVisible(false)
            setNewTopicValue('')
        }
    }

    useEffect(() => {
        if (updateResults.isSuccess) {
            dispatch(stateUpdateTopic(updateResults.data))
        }
    }, [updateResults.data, dispatch])

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
            createTask({
                authToken,
                topic_id: topic._id,
                task: {
                    description: taskValue
                }
            })
            setIsInputVisible(false)
            setTaskValue('')
        }
    }

    useEffect(() => {
        if (createResults.isSuccess) {
            dispatch(stateCreateTask(createResults.data))
        }
    }, [createResults.data, dispatch])

    const handleDeleteTopic = () => {
        deleteTopic({
            authToken,
            topic_id: topic._id
        })
    }

    if (deleteResults.isSuccess) {
        dispatch(stateRemoveTopic(topic._id))
    }

    let content;
    if (filteredTask.length > 0) {
        content = filteredTask.map((task) => {
            return <Box key={task._id} task={task} topic_id={topic._id} />
        })
    }


    return (
        <div className="w-72 m-1 flex flex-col gap-3">
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
                        : <h3 className="text-base font-light pl-1.5 pr-1.5 subpixel-antialiased break-words select-text overflow-hidden">{topic?.title}</h3>
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
            <div className="pb-4 pt-4 gap-2 flex flex-col items-center overflow-x-hidden overflow-y-auto">
                {content}
                {isInputVisible && <InputOperation value={taskValue} onChange={handleTaskInputChange} onKeyPress={handleTaskSubmitEnterPress} />}
            </div>
            {/* Style for hiding the scroll bar */}
            <style>
                {`
                    .overflow-auto::-webkit-scrollbar {
                        width: 0 !important;
                    }
                    .overflow-y-auto {
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                `}
            </style>
        </div>
    )
}

export default Panel;