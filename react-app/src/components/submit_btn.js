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

    return (<>
        <button style={mystyle}>Submit</button>
    </>)
}

export {SubmitBtn}