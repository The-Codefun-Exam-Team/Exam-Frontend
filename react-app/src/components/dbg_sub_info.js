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
    const [data,resetdata] = useState(getSubmission(debugSubmissionId))
    if ( data.edit_result === 'Q' )
    {
        setTimeout(()=>resetdata(getSubmission(debugSubmissionId)),5000)
        
    }



    function getVerdict ()
    {
        if ( data.edit_result === 'SS' )
        {
            return "Partially Accepted"
        }
        if ( data.edit_result === 'Q' )
        {
            return "In queue"
        }
        if ( data.edit_result === 'AC' )
        {
            return "Accepted"
        }
        if ( data.edit_result === 'WA' )
        {
            return "Wrong Answer" 
        }

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
                    <td>Debug problem id:</td>
                    <td><a href={`/problem/${1}`}>Link to problem</a></td>
                </tr>
                <tr>
                    <td>Run id:</td>
                    <td><a target='_blank' rel='noreferrer' href={`https://codefun.vn/submissions/${data.codefun_id}`}>{data.codefun_id}</a></td>
                </tr>
                <tr>
                    <td>Debug verdict:</td>
                    <td>{getVerdict()}</td>
                </tr>
                <tr style={{borderBottom: '0px red solid'}}>
                    <td style={{borderBottom: '0px red solid'}}>Debug score:</td>
                    <td style={{borderBottom: '0px red solid'}}>100</td>
                </tr>
            </tbody>

        </Table>
    </div>
}

export {SubInfo} ;