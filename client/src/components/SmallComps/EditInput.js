import { useState } from "react";

function EditInput({addTopic}) {
    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const topic = { title: e.target.topic.value }
        addTopic(topic)
        setValue('')
    };  

    return (
        <form onSubmit={handleSubmit} className="flex flex-row justify-between gap-2 items-center pt-1 pb-1 pr-3 pl-3 ">
            <input
                required
                name="topic"
                className="outline-none bg-gray-950 bg-opacity-40 p-1 rounded-l-lg pl-3"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="outline-none bg-gray-950 bg-opacity-40 p-1 pl-2 pr-2 rounded-r-lg">Add</button>
        </form>
    );
}

export default EditInput;