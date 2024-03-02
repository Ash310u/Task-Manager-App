const StatusBox = ({ children, percentage }) => {
    return (
        <div className="text-green-200 opacity-70 text-sm font-extralight flex gap-1 flex-col justify-center h-2/3 min-w-36 p-1 bg-opacity-30 rounded-md">
            <div className="flex items-center bg-gray-100 bg-opacity-10 pl-1.5 pr-1.5 rounded-sm overflow-auto" >
                {children}
            </div>
            <div className="flex items-center bg-gray-100 bg-opacity-10 pl-1.5 pr-1.5 rounded-sm ">
                {percentage}%
            </div>
            {/* Style for hiding the scroll bar */}
            <style>
                {`
                    .overflow-auto::-webkit-scrollbar {
                        width: 0 !important;
                    }
                    .overflow-auto {
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                `}
            </style>
        </div>
    )
}

export default StatusBox;