import useNavigation from "../hooks/useNavigation";

const Link = ({ to, children}) => {
    const {navigate} = useNavigation()

    const handleClick = (e) => {
        e.preventDefault()

        if (e.metaKey || e.ctrlKey) {
            return;
        }

        navigate(to)
    }


    return <a href={to} onClick={handleClick}>{children}</a>
}

export default Link;