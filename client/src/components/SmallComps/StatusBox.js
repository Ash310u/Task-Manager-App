const StatusBox = ({children, totalTasks, completedTasks}) => {
    return (
        <div className="flex flex-col min-w-32">
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