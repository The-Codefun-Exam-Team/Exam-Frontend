import colors from '../config/color.ts'

function AboutNote()
{
    const mystyle = {
        width: '50%',
        backgroundColor: `${colors[3]}`,
        color: `${colors[0]}`,
        marginTop: '150px',
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
                <h3  style={{marginBottom:'20px'}}>About us, the developers.</h3>
                <ul style={contentstyle}>
                    <li>First of all, this website is based on <a target='_blank' rel='noreferrer' href='https://codefun.vn' style={{color:'white'}}>Codefun</a> website of Natsu Kagami,
                    so big thank to him for helping us a lot.</li>
                    <li>The idea belongs to Teacher Ho Dac Phuong, who gathered us and "initialize" this project.</li>
                    <li>About the rest of us, we're from HSGS2K6 including:
                        <ul>
                            <li>Frontend developer: KB</li>
                            <li>Backend developer: Unknown</li>
                            <li>Coordinator and server management: minhnhatnoe</li>
                        </ul>
                    </li>
                    <li>Thanks for reading this page. Best wishes to you all.</li>
                </ul>
            </div>
        </div>
    </>
}

export {AboutNote}