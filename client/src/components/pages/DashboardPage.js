import { useSelector } from "react-redux"
import Box from "../SmallComps/Box"
import ControlPanel from "../SmallComps/ControlPanel"
import Panel from "../SmallComps/Panel"

const DashboardPage = () => {
    const { topic } = useSelector(state => {
        return state
    })

    let content = Object.values(topic?.mutations).map((pack) => {
        const id = pack?.data?._id
        const title = pack?.data?.title
        return (
            <Panel key={id} header={title}>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
            </Panel>
        )
    })

    return (
        <div className="w-screen h-screen flex flex-col p-10 backdrop-blur text-white overflow-auto">
            <div className="m-5">
                <ControlPanel />
            </div>
            <div className="flex flex-row flex-4 gap-10 m-10 overflow-auto">
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