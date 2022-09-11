import { useParams } from "react-router-dom";
import { Navigationbar } from "../components/navbar";
import { useEffect } from "react";
import { ProblemLs } from "../components/prob_ls";

function ContestPage ()
{
    const {contestId} = useParams()
    
    useEffect(() => {
        console.log(contestId)
      }, [contestId])
    
    return (<>
        <Navigationbar />
        <ProblemLs />
    </>)

}

export default ContestPage ;