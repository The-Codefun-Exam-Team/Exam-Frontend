import colors from '../config/color.ts'
import { useParams } from "react-router-dom";
import { getDebugProblem } from '../api/codefundebug';




function InfoBtn (props)
{
    const mystyle = {
        marginBottom: '30px',
        color: 'white',
        backgroundColor: `${colors[3]}`,
        borderRadius: '4px',
        border: `2px solid ${colors[4]}`,
        float: `${props.float}`,
        marginRight: '20px',
        fontSize: 'larger',
        marginTop: '10px',
    }   

    return <button onClick={props.onClick} style={mystyle} disabled={props.disabled} >{props.name}</button>
}



function FunctionBar ()
{
    const {debugProblemId} = useParams()
    const problemId = getDebugProblem(debugProblemId).problem.code ;
    const url = 'https://codefun.vn/problems/' + problemId;
    
    function _onClick () 
    {
        window.open(url)
    }
    return <>
        <InfoBtn disabled={true} name='Language: C _ CPP' />
        <InfoBtn disabled={false} name={problemId} onClick={_onClick}/> 
    </>
}

export {FunctionBar}