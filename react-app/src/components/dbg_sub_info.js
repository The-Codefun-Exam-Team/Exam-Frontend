import { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { getSubmission } from '../api/codefundebug'
import colors from '../config/color.ts'

function SubInfo()
{
    const tableStyle = {
        width: '450px',
        borderColor: `${colors[3]}`,
        backgroundColor: `${colors[4]}`,
        color: `${colors[0]}`,
        marginTop: '100px',
        borderRadius: '5px'

    }


    const {debugSubmissionId} = useParams()
    console.log(debugSubmissionId)
    const [data,resetdata] = useState(getSubmission(debugSubmissionId))
    if ( data.edit_result === 'Q' )
    {
        
        setTimeout(()=>resetdata(getSubmission(debugSubmissionId)),5000)
        
    }


    

    

    return <div>

        <Table style={tableStyle} className='mx-auto'>
            <thead >
                <tr>
                    <th colSpan={2} style={{textAlign:'center'}}>Debug submission info</th>
                </tr>
            </thead>
            <tbody >
                <tr>
                    <td>Debug problem:</td>
                    <td><a href={`/problem/${data.debug_problem_code}`}>{data.debug_problem_code}</a></td>
                </tr>
                <tr>
                    <td>Run id:</td>
                    <td><a target='_blank' rel='noreferrer' href={`https://codefun.vn/submissions/${data.codefun_id}`}>{data.codefun_id}</a></td>
                </tr>
                <tr style={{borderBottom: '0px red solid'}}>
                    <td style={{borderBottom: '0px red solid'}}>Debug score:</td>
                    <td style={{borderBottom: '0px red solid'}}>{data.edit_score}</td>
                </tr>
            </tbody>

        </Table>
    </div>
}

export {SubInfo} ;