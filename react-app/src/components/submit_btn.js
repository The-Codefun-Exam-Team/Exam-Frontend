import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { submitDebug } from '../api/codefundebug'
import colors from '../config/color.ts'

function SubmitBtn (props)
{
    const mystyle = {
        margin: 'auto',
        display: 'block',
        marginTop: '20px',
        backgroundColor: `${colors[4]}`,
        color: `${colors[0]}`,
        borderRadius: '5px',
        fontSize: 'larger',
        padding: '3px 10px',
        border: `${colors[5]} 2px solid`,
        outline: '0px solid black'


    }

    const {problemId} = useParams()
    const code = useSelector((state)=>state.codedata.usercode.payload)

    function _onClick ()
    {
        console.log("Submitting")
        submitDebug(code,problemId).done(function(response,status){
            if ( status === 'success' )
            {
                window.location = '/submission/' + response
            }
            else
            {
                alert('Submit fail, please wait 1\'30\'\' to submit again or check your connection')
            }
        })
    }

    return (<>
        <button onClick={_onClick} style={mystyle}>Submit</button>
    </>)
}

export {SubmitBtn}