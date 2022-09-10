import ReactAce from 'react-ace'
import colors from '../config/color.ts'
import { update_realcode , update_usercode } from '../features/codedata.js';
import { useDispatch } from 'react-redux';
import { cpp_format } from '../features/cpp_format';
import { useRef } from 'react';

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
        borderBottom: `${colors[0]} 2px solid`,
        marginTop: '5px',
    }

    return <div style={mystyle}>{props.content}</div>
}


function UserEditor(props)
{
    const dispatch = useDispatch();
    
    const codeToDebug = props.data.code
    const timerRef = useRef() ;
    dispatch(update_usercode(codeToDebug))
    function _onChange (code)
    {
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(()=>dispatch(update_usercode(code)),500)
        
    }

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
            onChange={_onChange}
        />
    </>
    )
}

function ConstantEditor(props)
{
    const dispatch = useDispatch()
    const codeToDebug = props.data.code
    dispatch(update_realcode(cpp_format(codeToDebug)))


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