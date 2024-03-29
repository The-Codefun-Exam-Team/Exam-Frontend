import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { submitDebug } from '../api/codefundebug'
import colors from '../config/color.ts'

function SubmitBtn (props)
{
    const mystyle = {
        margin: 'auto',
        display: 'block',
        marginTop: '30px',
        backgroundColor: `${colors[4]}`,
        color: `${colors[0]}`,
        borderRadius: '5px',
        fontSize: 'larger',
        padding: '3px 10px',
        border: `${colors[5]} 2px solid`,
        outline: '0px solid black'


    }

    const {debugProblemId} = useParams()
    const code = useSelector((state)=>state.codedata.usercode.payload)
    console.log(debugProblemId)

    function _onClick ()
    {
        console.log(debugProblemId)
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

    return (<>
        <button onClick={_onClick} style={mystyle}>Submit</button>
    </>)
}

export {SubmitBtn}