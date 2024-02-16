import { useState } from "react";

function EditInput({ onSubmit, setIsInput }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title: e.target.topic.value
        })
    };

    const handleSetInput = () => {
        setIsInput(true);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row justify-between gap-2 items-center pt-1 pb-1 pr-3 pl-3 ">
            <input
                name="topic"
                className="bg-gray-950 bg-opacity-40 p-1 rounded-l-lg pl-3"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => handleSetInput()} className="bg-gray-950 bg-opacity-40 p-1 pl-2 pr-2 rounded-r-lg">Add</button>
        </form>
    );
}

export default EditInput;