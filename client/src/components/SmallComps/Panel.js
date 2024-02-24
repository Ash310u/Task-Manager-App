import { useState } from "react";
import { BiSolidEditAlt, BiSolidAddToQueue } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import IconDiv from "./utilsComp/IconDiv";
import InputOperation from "./utilsComp/InputOperation";

const Panel = ({ header, children, onClick, onSubmit }) => {
    const [isInputVisible, setIsInputVisible] = useState(false)
    const [isEditVisible, setIsEditVisible] = useState(false)
    const [taskValue, setTaskValue] = useState('')

    const handleAddInput = () => {
        setIsInputVisible(curr => !curr)
        if (!isInputVisible) {
            setTaskValue('')
        }
    }

    const handleTaskInputChange = (e) => {
        setTaskValue(e.target.value)
    }

    const handleTaskInputClick = () => {
        onClick()
    }

    const handleTaskSubmitEnterPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            onSubmit(taskValue)
            setIsInputVisible(false)
            setTaskValue('')
        }
    }

    const handleEditInput = () => {
        setIsEditVisible(curr => !curr)
    }

    return (
        <div className="w-72 m-1">
            <div className="pt-2 pb-2 pl-1 pr-1 flex flex-row justify-between items-center select-none">
                {isEditVisible ? <InputOperation className={"min-w-40 m-2 p-1.5 pl-2 text-sm"}/> : <h3 className="text-base font-light pr-1.5 pl-1.5 subpixel-antialiased break-words select-text overflow-hidden">{header}</h3>}
                <div className="gap-1 flex flex-row justify-center items-center text-xl rounded-lg">
                    <IconDiv onClick={handleEditInput}>
                        {isEditVisible ? <BiX /> : <BiSolidEditAlt />}
                    </IconDiv>
                    <IconDiv onClick={handleAddInput}>
                        {isInputVisible ? <BiX /> : <BiSolidAddToQueue />}
                    </IconDiv>
                    <IconDiv >
                        <BsThreeDots />
                    </IconDiv>
                </div>
            </div>
            <div className="pb-4 pt-4 gap-2 flex flex-col items-center" onClick={handleTaskInputClick}>
                {children}
                {isInputVisible && <InputOperation value={taskValue} onChange={handleTaskInputChange} onKeyPress={handleTaskSubmitEnterPress} />}
            </div>
        </div>
    )
}

export default Panel;