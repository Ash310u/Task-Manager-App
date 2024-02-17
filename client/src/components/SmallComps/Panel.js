const Panel = ({ header, children }) => {
    return (
        <div className="w-80 m-1">
            <h3 className="pl-6 pt-2 pb-2">{header}</h3>
            <div className="pb-4 pt-4 gap-2 flex flex-col items-center">
                {children}
            </div>
        </div>
    )
}

export default Panel;