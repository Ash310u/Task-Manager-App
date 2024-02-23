const IconDiv = ({children, ...rest}) => {
    return (
        <div {...rest} className=" bg-black p-1.5 hover:bg-gray-800 rounded-lg outline-none">
            {children}
        </div>
    )
}

export default IconDiv;