const StatusBox = ({children, totalTasks, completedTasks}) => {
    return (
        <div className="flex flex-col min-w-32 bg-gray-950 p-1 pr-3 pl-3 bg-opacity-30 rounded-xl">
            <div className="">
                {children}
            </div>
            <div className="max-h-6">
                {completedTasks}/{totalTasks}
            </div>
        </div>
    )
}

export default StatusBox;