import colors from '../config/color.ts'
import { useSelector } from 'react-redux'
import { editDistance } from '../features/editdistance';
import { cpp_format } from '../features/cpp_format';


function InfoBtn (props)
{
    function marginright()
    {
        if ( props.float === 'left' )
        {
            return '20px' ;
        }
        else
        {
            return '0px' ;
        }
    }
    function marginleft()
    {
        if ( props.float === 'right' )
        {
            return '20px' ;
        }
        else
        {
            return '0px' ;
        }
    }
    const mystyle = {
        marginBottom: '30px',
        color: 'white',
        backgroundColor: `${colors[4]}`,
        borderRadius: '4px',
        border: `2px solid ${colors[5]}`,
        float: `${props.float}`,
        marginRight: `${marginright()}`,
        marginLeft: `${marginleft()}`,
        fontSize: 'larger',
        marginTop: '10px',
        padding: '3px 8px'
    }   

    return <button onClick={props.onClick} style={mystyle} disabled={props.disabled} >{props.name}</button>
}



function FunctionBar (props)
{ 
    const problemId = props.data.problem.code
    const url = 'https://codefun.vn/problems/' + problemId;
    const usercode = useSelector((state)=>state.codedata.usercode.payload)
    const realcode = useSelector((state)=>state.codedata.realcode.payload)
    
    function _onClick () 
    {
        window.open(url)
    }
    return <>
        <InfoBtn disabled={true} float='left' name='Language: C _ CPP' />
        <InfoBtn disabled={false} float='left' name={problemId} onClick={_onClick}/> 
        <InfoBtn disabled={true} float='right' name={`Difference: ${editDistance(cpp_format(usercode),realcode)}`} />
        <InfoBtn disabled={true} float='right'name={'Expected score: 100'} />
    </>
}

export {FunctionBar}