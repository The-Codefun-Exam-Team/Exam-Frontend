import { useParams } from "react-router-dom";
import { Navigationbar } from "../components/navbar";
import { useEffect } from "react";
import { UserEditor } from "../components/ace_editor";

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