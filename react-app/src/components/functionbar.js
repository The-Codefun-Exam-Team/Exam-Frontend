import colors from '../config/color.ts'
import { useSelector } from 'react-redux'
import { editDistance } from '../features/editdistance';
import { cpp_format } from '../features/cpp_format';
import Table from "react-bootstrap/esm/Table"
import { useParams } from 'react-router-dom';
import { submitDebug } from '../api/codefundebug';

function InfoBtn (props)
{
   
    
    const mystyle = {
        color: 'white',
        backgroundColor: `${colors[4]}`,
        borderRadius: '4px',
        border: `2px solid ${colors[5]}`,
        float: `${props.float}`,
        marginRight: '22px',
        fontSize: '25px',
        marginTop: '15px',
        padding: '3px 8px',
    }   

    return <div className={`${props.className}`}><button onClick={props.onClick}  style={mystyle} disabled={props.disabled} >{props.name}</button></div>
}



function FunctionBar (props)
{ 
    const problemId = props.data.problem.code
    const url = 'https://codefun.vn/problems/' + problemId;
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

    
    return <>

        
        <Table style={tableStyle} borderless={true}>
            <thead>
                <tr>
                    <th colSpan={2}><div style={scoreStyle}>Score: 100</div></th>
                </tr>
            </thead>
            <tbody style={{backgroundColor:`${colors[4]}`}}>
                <tr>
                    <th style={{borderBottom:`${colors[5]} solid 2px`,borderRight:`${colors[5]} solid 2px`,borderTop:`${colors[5]} solid 2px`}}>asjldf</th>
                    <th style={{borderBottom:`${colors[5]} solid 2px`,borderTop:`${colors[5]} solid 2px`}}>fjdsklf</th>
                </tr>
                <tr>
                    <th style={{borderBottom:`${colors[5]} solid 2px`,borderRight:`${colors[5]} solid 2px`}}>asjldf</th>
                    <th style={{borderBottom:`${colors[5]} solid 2px`}}>fjdsklf</th>
                </tr>
                <tr>
                    <th style={{borderBottom:`${colors[5]} solid 2px`,borderRight:`${colors[5]} solid 2px`}}>asjldf</th>
                    <th style={{borderBottom:`${colors[5]} solid 2px`}}>fjdsklf</th>
                </tr>
                <tr>
                    <th style={{borderBottom: '0px red solid',borderRight:`${colors[5]} solid 2px`}}>asjldf</th>
                    <th style={{borderBottom: '0px red solid',outlineRight:`${colors[5]} solid 2px`,outlineLeft:`${colors[5]} solid 2px`}}>fjdsklf</th>
                </tr>
            </tbody>
        </Table>
    </>
}


export {FunctionBar,ProblemInfoTable}