import colors from '../config/color.ts'

function BetaNote()
{
    const mystyle = {
        width: '50%',
        backgroundColor: `${colors[3]}`,
        color: `${colors[0]}`,
        marginTop: '58px',
        padding: '20px',
        border: `${colors[4]} 3px solid`,
        borderRadius: '5px',

    }

    const contentstyle = {
        fontFamily: 'times',
        fontSize: '20px',
    }

    return <>
        <div>
            <div className="mx-auto" style={mystyle}>
                <h3>Beta version notes</h3>
                <ul style={contentstyle}>
                    <li>This is beta version of the website. If deployed successfully, we will continue with it.</li>
                    <li>To start with, you have to click the "problems" button on the navigation bar to continue.</li>
                    <li>You can't view the previous submission in this beta version, nor the highest score you made, so please be careful.</li>
                    <li>More information about the website, please go to the about page <a style={{color:`${colors[0]}`}} href='/about'>here</a>.</li>
                    <li>This site can be buggy, so please don't login using two accounts simultaneously, or else your submission won't be count.</li>
                </ul>
            </div>
        </div>
    </>
}

export {BetaNote}