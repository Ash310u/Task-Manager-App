import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopic, useCreateTopicMutation } from "../../store/index";

function EditInput({ setIsInput }) {
    const dispatch = useDispatch()

    const [value, setValue] = useState('');
    const [ createTopic, results] = useCreateTopicMutation()

     const authToken = useSelector(state => {
        return state.userData.user?.token;
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const topic = {title: e.target.topic.value}
        createTopic({ authToken, topic })
        if (results.isSuccess) {
            dispatch(addTopic(results.data))
        }
    };

    const handleSetInput = () => {
        setIsInput(false);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row justify-between gap-2 items-center pt-1 pb-1 pr-3 pl-3 ">
            <input
                name="topic"
                className="bg-gray-950 bg-opacity-40 p-1 rounded-l-lg pl-3"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleSetInput} className="bg-gray-950 bg-opacity-40 p-1 pl-2 pr-2 rounded-r-lg">Add</button>
        </form>
    );
}

export default EditInput;