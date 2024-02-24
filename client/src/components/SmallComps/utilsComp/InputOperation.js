const InputOperation = ({...rest}) => {
    return (
        <input
            type="text"
            placeholder="Add..."
            className="outline-none select-none ml-5 text-gray-50 min-w-64 max-h-min bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg p-3"
            {...rest}
        />
    )
}

export default InputOperation;