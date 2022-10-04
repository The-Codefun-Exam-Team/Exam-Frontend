import { Navigationbar } from "../components/navbar";
import { useLocation } from "react-router-dom"

function NotFoundPage ()
{
    const location = useLocation()
    return (<>
        <Navigationbar /> 
        <div>{`Path ${location.pathname} not found`}</div>
    </>)
}

export default NotFoundPage