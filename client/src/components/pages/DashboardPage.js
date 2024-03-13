import ControlPanel from "../SmallComps/ControlPanel"
import Panel from "../SmallComps/Panel"
import { useFetchTopicQuery } from "../../store"

const DashboardPage = () => {
    const authToken = window.localStorage.getItem('authToken')

    const { data, error, isSuccess } = useFetchTopicQuery(authToken)

    let content;
    if (error) {
        content = <div className="text-5xl opacity-50">404 Error</div>
    }

    if (isSuccess) {
        content = data.map((topic) => {
            return (
                <Panel key={topic._id} topic={topic} />
            )
        })
    }

    return (
        <div className="w-screen h-screen flex flex-col p-10 backdrop-blur text-white overflow-auto">
            <div className="m-5">
                {isSuccess && <ControlPanel data={data} />}
            </div>
            <div className="flex flex-row flex-4 gap-10 m-10 pl-10 pr-10 overflow-auto">
                {content}
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

export default DashboardPage