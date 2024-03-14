import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { BiSolidEditAlt, BiX } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import IconDiv from "./utilsComp/IconDiv";
import InputOperation from "./utilsComp/InputOperation";
import { CgRemove } from "react-icons/cg";
import { useDeleteTopicTaskMutation, useUpdateTopicTaskMutation } from "../../store";

const Box = ({ task, topic_id }) => {
    const [isChecked, setIsChecked] = useState(task.completed)
    const [isEditVisible, setIsEditVisible] = useState(false)

    const [newTaskValue, setnewTaskValue] = useState(task.description)
    
    const authToken = window.localStorage.getItem('authToken')

    const [updateTopicTask] = useUpdateTopicTaskMutation()
    const [deleteTopicTask] = useDeleteTopicTaskMutation()

    const handleChecked = () => {
        updateTopicTask({
                authToken,
                topic_id,
                task_id: task._id,
                task: {
                    completed: !isChecked
                }
            })
        setIsChecked(curr => !curr)
    }

    const handleEditInput = () => {
        setIsEditVisible(curr => !curr)
    }
    const handleTaskInputChange = (e) => {
        setnewTaskValue(e.target.value)
    }
    const handleTaskSubmitEnterPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (newTaskValue !== task.description) {
                        updateTopicTask({
                            authToken,
                            topic_id,
                            task_id: task._id,
                            task: {
                                description: newTaskValue,
                                completed: false,
                            }
                        })
                    }
            setIsEditVisible(false)
            setIsChecked(false)
            setnewTaskValue('')
        }
    }

    const handleDeleteTask = () => {
        deleteTopicTask({
                    authToken,
                    topic_id,
                    task_id:task._id
                })
    }

    return (
        <div className="max-w-72 max-h-min flex flex-row gap-1 text-base justify-center items-center select-none">
            <div className="bg-none text-lg text-gray-200 h-8 subpixel-antialiased rounded-full flex flex-col justify-center items-center" onClick={handleChecked} >
                {
                    isChecked ?
                        <FaCheck className="w-5 h-5 p-0.5 text-green-400 text-base opacity-90 rounded-lg bg-gray-200 hover:bg-gray-200 hover:bg-opacity-10 backdrop-blur-lg bg-opacity-30" />
                        : <IconDiv className='w-2 h-2 p-2.5 rounded-lg bg-gray-200 hover:bg-gray-200 hover:bg-opacity-10 backdrop-blur-lg bg-opacity-30' />
                }
            </div>
            <div className="min-w-64 max-h-min flex flex-row  items-center  bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg  p-3 gap-2 overflow-hidden group ">
                <p className={twMerge(`font-thin text-gray-50 subpixel-antialiased break-words select-text`, isChecked && 'line-through')}>
                    {
                        isEditVisible ?
                            <InputOperation
                                value={newTaskValue}
                                onChange={handleTaskInputChange}
                                onKeyPress={handleTaskSubmitEnterPress}
                                className={"min-w-30 w-36 ml-0 mr-1 p-0 pl-1.5"}
                            /> : task.description}
                </p>
                <div className="absolute right-3 hidden group-hover:block text-gray-50">
                    <div className="gap-1 flex flex-row justify-center items-center text-xl rounded-lg">
                        <IconDiv onClick={handleEditInput}>
                            {isEditVisible ? <BiX /> : <BiSolidEditAlt />}
                        </IconDiv>
                        <IconDiv onClick={handleDeleteTask}>
                            <CgRemove />
                        </IconDiv>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box;