const Input = ({
    children,
    type,
    placeholder,
    onClick
}) => {

    return (
        <div>
            <h3 className="text-xs">{children}</h3>
            <input type={type} onClick={onClick} placeholder={placeholder} className={`bg-gray-200 border-gray-200 opacity-70 text-gray-950 w-72 p-1 pl-2 mb-1 mt-1 placeholder:text-xs rounded-lg`}>
            </input>
        </div>
    )
}

export default Input;