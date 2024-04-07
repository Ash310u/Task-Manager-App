import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ControlPanel from "../SmallComps/ControlPanel"
import Panel from "../SmallComps/Panel"
import { useFetchTaskQuery, stateAddManyTopic, useFetchTopicQuery, stateAddManyTask } from "../../store"

const DashboardPage = () => {
    const dispatch = useDispatch()
    const { topics } = useSelector((state) => {
        return state.topicSlice
    })

    const authToken = window.localStorage.getItem('authToken')
    
    const topicsQuery = useFetchTopicQuery(authToken)
    const tasksQuery = useFetchTaskQuery(authToken)
    
    useEffect(() => {
        if(tasksQuery.isSuccess) {
            dispatch(stateAddManyTask(tasksQuery.data))
        }
    },[tasksQuery.data, dispatch])

    useEffect(() => {
        if(topicsQuery.isSuccess) {
            dispatch(stateAddManyTopic(topicsQuery.data))
        }
    },[topicsQuery.data, dispatch])

    let content;
    if (topicsQuery.error) {
        content = <div className="text-5xl opacity-50">Please Logged In First</div>
    }
    if (topicsQuery.isSuccess) {
        content = topics.map((topic) => {
            return <Panel key={topic._id} topic={topic} />
        })
    }

    return (
        <div className="w-screen h-screen flex flex-col p-10 backdrop-blur text-white overflow-auto">
            <div className="m-5">
                {topicsQuery.isSuccess && <ControlPanel data={topics} />}
            </div>
            <div className="flex flex-row flex-4 gap-10 m-10 pl-10 pr-10 overflow-x-auto overflow-y-hidden">
                {content}
            </div>
            {/* Style for hiding the scroll bar */}
            <style>
                {`
                    .overflow-auto::-webkit-scrollbar {
                        width: 0 !important;
                    }
                    .overflow-x-auto {
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                `}
            </style>
        </div>
    )
}

export default DashboardPage