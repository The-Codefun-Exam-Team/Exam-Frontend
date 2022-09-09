import ReactAce from 'react-ace'
import { getDebugProblem } from '../api/codefundebug';
import { useParams } from 'react-router-dom';
import colors from '../config/color.ts'
import { update_realcode , update_usercode } from '../features/codedata.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/ext-language_tools"

function CodeTitle (props)
{
    const mystyle = {
        backgroundColor: `${colors[5]}`,
        color: `${colors[0]}`,
        textAlign: 'center',
        fontSize: 'larger',
        padding: '8px',
        borderBottom: `${colors[0]} 2px solid`
    }

    return <div style={mystyle}>{props.content}</div>
}


function UserEditor()
{
    const {debugProblemId} = useParams()
    const codeToDebug = getDebugProblem(debugProblemId).code
    update_usercode(codeToDebug)

    const mystyle = {
        width: '90%%' ,
        display: 'block',
    }

    return (
    <>
        <CodeTitle content="User code go here" /> 
        <ReactAce 
            mode="c_cpp"
            theme="tomorrow_night_blue"
            name="usereditor"
            showPrintMargin={false}
            style={mystyle}
            value={codeToDebug}
            fontSize='16px'
        />
    </>
    )
}

function ConstantEditor()
{
    const dispatch = useDispatch()
    const {debugProblemId} = useParams()
    const codeToDebug = getDebugProblem(debugProblemId).code
    dispatch(update_realcode(codeToDebug))


    const mystyle = {
        width: '90%%' ,
        display: 'block',
        
    }

    return (
    <>
        <CodeTitle content="This is the code you need to debug" /> 
        <ReactAce 
            mode="c_cpp"
            theme="tomorrow_night_blue"
            name="constanteditor"
            showPrintMargin={false}
            readOnly={true}
            value={codeToDebug}
            style={mystyle}
            fontSize='16px'
        />
    </>
    )
}


export {UserEditor,ConstantEditor} ;