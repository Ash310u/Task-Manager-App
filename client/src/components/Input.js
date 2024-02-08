const Input = ({
    name,
    children,
    type,
    placeholder,
    onClick
}) => {

    return (
        <div>
            <h3 className="opacity-80 text-white text-xs">{children}</h3>
            <input required name={name} type={type} onClick={onClick} placeholder={placeholder} className={`bg-black border-black opacity-70 bg-opacity-60 text-gray-100 w-72 p-1 pl-2 mb-1 mt-1 placeholder:text-white  placeholder:text-xs rounded-lg`}>
            </input>
        </div>
    )
}

export default Input;