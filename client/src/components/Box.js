const Box = ({ children }) => {
    return (
        <div className='max-w-min  max-h-min bg-gray-200 border-gray-200 backdrop-blur-lg bg-opacity-10 rounded-lg p-3 m-3'>
            <p className='text-white w-80 break-words'>
                {children}
            </p>
        </div>
    )
}

export default Box;