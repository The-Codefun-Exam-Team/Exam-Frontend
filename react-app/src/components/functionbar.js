import colors from '../config/color.ts'
import { useSelector } from 'react-redux'
import { editDistance } from '../features/editdistance';
import { cpp_format } from '../features/cpp_format';
import Table from "react-bootstrap/esm/Table"
import { useParams } from 'react-router-dom';
import { submitDebug } from '../api/codefundebug';
import clipboardimg from '../clipboard.png';
import smileimg from '../smile.png'
import { useEffect, useMemo, useState } from 'react';

function InfoBtn (props)
{
   
    
    const mystyle = {
        color: 'white',
        backgroundColor: `${colors[4]}`,
        borderRadius: '4px',
        border: `2px solid ${colors[5]}`,
        float: `${props.float}`,
        marginRight: '22px',
        fontSize: '21px',
        marginTop: '15px',
        padding: '1px 8px',
    }   

    return <div className={`${props.className}`}><button onClick={props.onClick}  style={mystyle} disabled={props.disabled} >{props.name}</button></div>
}

function ClipboardButton ()
{
    // const pictures = useMemo(()=>{return [smileimg,clipboardimg]},[])
    // pictures.forEach((picture) => {
    //     const img = new Image();
    //     img.src = picture;
    // });
    const realcode = useSelector((state)=>state.codedata.realcode.payload)
    const [copying,update] = useState(false)
    useEffect(()=>{
        if ( copying )
        {
            setTimeout(()=>update(false),1000)
        }
    },[copying])
    function icon ()
    {
        if ( copying )
        {
            return smileimg
        }
        else
        {
            return clipboardimg
        }
    }
    function sz ()
    {
        if ( copying )
        {
            return '95%'
        }
        else
        {
            return '70%'
        }
    }
    const clipstyle = {
        backgroundImage: 'url('+icon()+')',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        border: '0px solid red',
        backgroundSize: `${sz()}`,
        backgroundPosition: '55%',
        width: '40px',
        height: '33px',
        padding: '0px',
        position: 'relative',
        margin: 'auto',
        cursor: 'pointer',


    }


    function __onClick ()
    {
        if ( !copying ) 
        {
            
              
            navigator.clipboard.writeText(realcode).then(setTimeout(()=>update(true),20))

        }

    }
    return <div style={clipstyle} onClick={__onClick}>
        
    </div>
}



function FunctionBar (props)
{ 

    const usercode = useSelector((state)=>state.codedata.usercode.payload)
    const realcode = useSelector((state)=>state.codedata.realcode.payload)
    const {debugProblemId} = useParams()
    const code = useSelector((state)=>state.codedata.usercode.payload)

    function _onClick ()
    {
        
        submitDebug(code,debugProblemId).done(function(response,status){
            
            if ( response.id !== undefined )
            {
                window.location = '/submission/' + response.id
            }
            else
            {
                alert('Submit fail, please wait 1\'30\'\' to submit again or check your connection')
            }
        })
    }
    return <div style={{height:'auto'}} className='d-flex flex-row'>

        <InfoBtn disabled={true} name={`Difference: ${editDistance(cpp_format(usercode),realcode)}`} />
        <InfoBtn disabled={true} name={'Expected score: 100'} />
        <InfoBtn disabled={false} className='ms-auto' name={'Submit'} onClick={_onClick} />
    </div>
}

function Verdict (props)
{
    let returnvalue = <></>
    if (props.cnt!==0)
    {

        returnvalue = <li>{props.verdictname}: x{props.cnt}</li>
    }
    return returnvalue
}

function BugDisplay (props)
{

    const mystyle = {
        margin: '0px',
    }
    
    return <ul style={mystyle}>
        <Verdict verdictname='WA' cnt={props.cntWA}/>
        <Verdict verdictname='TLE' cnt={props.cntTLE}/>
        <Verdict verdictname='RTE' cnt={props.cntRTE}/>
    </ul>
}

function ProblemInfoTable(props)
{
    const tableStyle = {
        color: `${colors[0]}`,
        textAlign: 'center',
        fontSize: '20px',
        borderRadius: '5px',
        outline: `${colors[5]} solid 4px`,
        marginTop: '19px',
    }

    const scoreStyle = {
        color: `${colors[4]}`,
        borderRadius: '5px',

        textAlign: 'center',
        fontSize: '30px',
        padding: '30px ',
        fontWeight: '600',
    

    }

    const {debugProblemId} = useParams()
    const problemId = props.data.problem.code
    const url = 'https://codefun.vn/problems/' + problemId;
    var cntWA = 0 
    var cntRTE = 0 
    var cntTLE = 0 
    console.log(props.data.judge.tests)
    const testdata = props.data.judge.tests
    for ( let i = 0 ; i < props.data.judge.total ; i ++ )
    {
        if ( testdata[i].verdict === 'WA' )
        {
            cntWA ++ 
        }
        if ( testdata[i].verdict === 'RTE' )
        {
            cntRTE ++ 
        }
        if ( testdata[i].verdict === 'TLE' )
        {
            cntTLE ++ 
        }

    }
    
    
    
    return <>

        
        <Table style={tableStyle} borderless={true}>
            <thead>
                <tr>
                    <th colSpan={2}><div style={scoreStyle}>Highest score: {props.data.best_score}</div></th>
                </tr>
            </thead>
            <tbody style={{backgroundColor:`${colors[4]}`}}>
                <tr>
                    <th style={{borderBottom:`${colors[5]} solid 2px`,borderRight:`${colors[5]} solid 2px`,borderTop:`${colors[5]} solid 2px`}}>Problem</th>
                    <th style={{borderBottom:`${colors[5]} solid 2px`,borderTop:`${colors[5]} solid 2px`}}>{debugProblemId}</th>
                </tr>
                <tr>
                    <th style={{borderBottom:`${colors[5]} solid 2px`,borderRight:`${colors[5]} solid 2px`}}>Statement</th>
                    <th style={{borderBottom:`${colors[5]} solid 2px`}}><a href={url} target='_blank' rel='noreferrer'>{problemId}</a></th>
                </tr>
                <tr>
                    <th style={{borderBottom:`${colors[5]} solid 2px`,borderRight:`${colors[5]} solid 2px`}}>Code to debug</th>
                    <th style={{borderBottom:`${colors[5]} solid 2px`}}><ClipboardButton /></th>
                </tr>
                <tr>
                    <th style={{borderBottom:`${colors[5]} solid 2px`,borderRight:`${colors[5]} solid 2px`}}>Language</th>
                    <th style={{borderBottom:`${colors[5]} solid 2px`}}>{props.data.language}</th>
                </tr>
                <tr>
                    <th style={{borderBottom: '0px red solid',borderRight:`${colors[5]} solid 2px`}}>Bugs</th>
                    <th style={{borderBottom: '0px red solid',outlineRight:`${colors[5]} solid 2px`,outlineLeft:`${colors[5]} solid 2px`}}><BugDisplay cntRTE={cntRTE} cntWA={cntWA} cntTLE={cntTLE}/></th>
                </tr>
            </tbody>
        </Table>
    </>
}


export {FunctionBar,ProblemInfoTable}