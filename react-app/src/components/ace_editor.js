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
        marginTop: '25px',
        borderRadius: '5px 5px 0px 0px',
        display: 'block'
    }

    return <div style={mystyle}>{props.content}</div>
}


function UserEditor(props)
{
    const dispatch = useDispatch();
    const timerRef = useRef() ;
    
    const codeToDebug = props.data.code
    dispatch(update_usercode(codeToDebug))
    dispatch(update_realcode(codeToDebug))
    function _onChange (code)
    {
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(()=>dispatch(update_usercode(code)),500)
        
    }

    const mystyle = {
        marginRight: '20px',
        borderRadius: '5px',
    }

    return (
    <div style={mystyle}>
        <CodeTitle content="User code go here" /> 
        <ReactAce 
            mode="c_cpp"
            theme="tomorrow_night_blue"
            name="usereditor"
            showPrintMargin={false}
            value={codeToDebug}
            fontSize='16px'
            onChange={_onChange}
            style={{width:'100%',borderRadius: '0px 0px 5px 5px'}}
        />
    </div>
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