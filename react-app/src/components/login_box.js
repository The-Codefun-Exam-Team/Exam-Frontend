import Card from 'react-bootstrap/Card';
import colors from '../config/color.ts';
import React from 'react';
;

class Inputbox extends React.Component
{

    inputboxstyle = {
        margin: '26px 30px 0px 30px',
        backgroundColor:'transparent',
        border: `${colors[3]} 0px solid`,
        borderRadius: '3px',
        outlineColor: `${colors[4]}`,
        fontSize: 'larger',
        outline: `${colors[3]} solid 2.5px` ,
        paddingLeft: '10px',
        paddingRight: '5px',
    }

    focusinevent = event =>
    {
        event.currentTarget.style.borderColor = `${colors[4]}`
        event.currentTarget.style.outline = `${colors[4]} solid 3.5px`
        
    }
    
    focusoutevent = event =>
    {
        event.currentTarget.style.borderColor = `${colors[3]}`
        event.currentTarget.style.outline = `${colors[3]} solid 2.5px`
    }


    render() {
        return(
            <>
                <input placeholder={this.props.placeholder} maxLength={this.props.maxlength} style={this.inputboxstyle} type={this.props.type} onFocus={this.focusinevent} onBlur={this.focusoutevent}/>
            </>
        )

    }
    

}

class SubmitBtn extends React.Component 
{
    submitbtnstyle = {
        padding: '3px 11px',
        margin: 'auto',
        marginTop: '17px',
        marginBottom: '10px',
        fontSize: 'larger',
        border: `${colors[3]} 0px solid`,
        borderRadius: '4px',
        color: `${colors[0]}`,
        backgroundColor: `${colors[3]}`
    }

    _onFocus = event => 
    {
        event.currentTarget.style.backgroundColor = `${colors[2]}` ;
    }    

    _outFocus = event => 
    {
        event.currentTarget.style.backgroundColor = `${colors[3]}` ;
    }
    render ()
    {

        return <input style={this.submitbtnstyle} type={'submit'} value='Login' onMouseDown={this._onFocus} onMouseOut={this._outFocus}  onMouseUp={this._outFocus}></input>

    }
}


function LoginBox ()
{
    
    const boxstyle = {
        width: '560px',
        marginTop:'150px',
        borderColor:`${colors[3]}`,
        borderRadius:'6px',
        borderWidth: '2px'
    }

    const titlestyle = {
        padding:'10px 15px 2px 15px',
        fontSize:'x-large',
        backgroundColor:`${colors[3]}`,
        borderRadius:'15px 15px 0px 0px',
        marginBottom:'0px',
        color:`${colors[0]}`,
        borderWidth:'px',
        
    }

    const subtitlestyle = {
        color:'gray',
        paddingLeft:'15px',
        paddingBottom: '8px',
        backgroundColor:`${colors[3]}`,
        marginTop:'0px',
        fontSize:'medium',
        borderWidth:'0px',
    }

    const headerstyle = {
        position: 'relative',
        top: -1 ,
        left:-1,
        backgroundColor: `${colors[3]}`,
        borderRadius: '4px',
        width: '558px' ,
    }
    


    

    return (<>
        <Card style={boxstyle} className='mx-auto'>
            <div style={headerstyle }>
                <Card.Title style={titlestyle}>Please login</Card.Title>
                <Card.Subtitle style={subtitlestyle}>You should use codefun.vn account</Card.Subtitle>
            </div>
            <Inputbox placeholder="Username:" type="text" maxlength={24}/>
            <Inputbox placeholder="Password:" type="password" maxlength={64}/>
            <SubmitBtn/>
        </Card>
        
    </>)
}

export {LoginBox} ;