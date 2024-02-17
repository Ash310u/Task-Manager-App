import Box from "../SmallComps/Box"
import ControlPanel from "../SmallComps/ControlPanel"
import Panel from "../SmallComps/Panel"

const DashboardPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col p-10 backdrop-blur text-white overflow-auto">
            <div className="m-5">
                <ControlPanel />
            </div>
            <div className="flex flex-row flex-4 gap-10 m-10 overflow-auto">
                <Panel header='For Exam'>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                </Panel>
                <Panel header='For Exam'>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                </Panel>
                <Panel header='For Exam'>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                </Panel>
                <Panel header='For Exam'>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                </Panel>
                <Panel header='For Exam'>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                </Panel>
                <Panel header='For Exam'>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                </Panel>
                <Panel header='For Exam'>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                </Panel>
                <Panel header='For Exam'>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                    <Box>hello world</Box>
                </Panel>
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