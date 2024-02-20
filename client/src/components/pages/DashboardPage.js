import { useSelector } from "react-redux"
import Box from "../SmallComps/Box"
import ControlPanel from "../SmallComps/ControlPanel"
import Panel from "../SmallComps/Panel"
import { useCreateTopicMutation, useFetchTopicQuery } from "../../store"

const DashboardPage = () => {
    const authToken = useSelector(state => {
        return state.userData.user?.token;
    })
    const { data, error, isSuccess } = useFetchTopicQuery(authToken)
    const [createTopic] = useCreateTopicMutation()

    const handleAddTopic = (topic) => {
        createTopic({ authToken, topic })    
    }
    
    let content;
    if(error) {
        content = <div className="text-5xl opacity-50">404 Error</div>
    }
    if(isSuccess) {
        content = data.map((topic) => {
            const id = topic?._id
            const title = topic?.title
            return (
                <Panel key={id} header={title}>
                        <Box>hello world</Box>
                        <Box>hello world</Box>
                        <Box>hello world</Box>
                </Panel>
            )
        })
    }

    return (
        <div className="w-screen h-screen flex flex-col p-10 backdrop-blur text-white overflow-auto">
            <div className="m-5">
                <ControlPanel addTopic={handleAddTopic} />
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