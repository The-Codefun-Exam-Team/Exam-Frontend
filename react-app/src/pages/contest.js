import { useParams } from "react-router-dom";
import { Navigationbar } from "../components/navbar";
import { useEffect } from "react";

function ContestPage ()
{
    const {contestId} = useParams()
    
    useEffect(() => {
        console.log(contestId)
      }, [contestId])
    
    return (<>
        <Navigationbar />
         
    </>)

}

export default ContestPage ;