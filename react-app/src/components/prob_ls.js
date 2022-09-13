import Table from "react-bootstrap/esm/Table"
import colors from '../config/color.ts'

function ProblemLs(props)
{
    const tableStyle = {
        width: '450px',
        borderColor: `${colors[3]}`,
        backgroundColor: `${colors[4]}`,
        color: `${colors[0]}`,
        marginTop: '100px',
        borderRadius: '5px',
        fontSize: 'large'

    }
    function probid(num)
    {
        var s = num.toString()
        while ( s.length < 3 )
        {
            s = '0' + s 
        }
        s = 'D' + s 
        return s 
    }
    const arr = []
    for ( let i = props.startidx ; i < props.startidx + 7 ; i ++ )
    {
        arr.push(<tr key={i} ><th style={{textAlign: 'center',borderRight:`2px ${colors[3]} solid`}}>{probid(i)}</th><th style={{textAlign: 'center'}} ><a  href={`/problem/${probid(i)}`}>Link to problem</a></th></tr>)

    }
    arr.push(<tr key={props.startidx+7}><th  style={{textAlign: 'center',borderRight:`2px ${colors[3]} solid`,borderBottom:'0px solid red'}}>{`${probid(props.startidx+7)}`}</th><th style={{textAlign: 'center',borderBottom:'0px solid red'}} ><a  href={`/problem/${probid(props.startidx+7)} `}>Link to problem</a></th></tr>)

    // for ( let i = 1 ; i < 10 ; i ++ )
    // {
    //     arr.push(<tr key={i} ><th style={{textAlign: 'center',borderRight:`2px ${colors[3]} solid`}}>{`D00${i}`}</th><th style={{textAlign: 'center'}} ><a  href={`/problem/D00${i}`}>Link to problem</a></th></tr>)
    // }
    // for ( let i = 10 ; i < 16 ; i ++ )
    // {
    //     arr.push(<tr key={i} ><th style={{textAlign: 'center',borderRight:`2px ${colors[3]} solid`}}>{`D0${i}`}</th><th style={{textAlign: 'center'}} ><a  href={`/problem/D0${i}`}>Link to problem</a></th></tr>)
    // }
    // arr.push(<tr key={16}><th  style={{textAlign: 'center',borderRight:`2px ${colors[3]} solid`,borderBottom:'0px solid red'}}>{`D016`}</th><th style={{textAlign: 'center',borderBottom:'0px solid red'}} ><a  href={`/problem/D016 `}>Link to problem</a></th></tr>)
    
    

    return <div>

        <Table responsive='md' style={tableStyle} className='mx-auto'>
            <thead >
                <tr>
                    <th colSpan={2} style={{textAlign:'center'}}>Choose your problem</th>
                </tr>
            </thead>
            <tbody >
                {arr}
            </tbody>

        </Table>
    </div>
}

export {ProblemLs}