import colors from '../config/color.ts'
import mystyles from '../config/styles.module.css'
import Nav from 'react-bootstrap/Nav';


function NavbarBtn(props)
{
    const mystyle = {
        color: colors[0] ,
        backgroundColor: 'transparent' ,
        fontSize: 'medium',
        fontWeight: '400',
        paddingLeft: '20px',
        borderLeft: `3px solid ${colors[0]}`,
        marginRight: '10px',
        marginLeft: '10px',
        width:'fit-content',
        paddingTop: '0px',
        paddingBottom: '0px',
        marginTop: '8px',
        marginBottom: '5px',
        cursor: 'pointer',
    };


    return (<Nav.Link onClick={props.onClick} href={props.url} target={props.target} style={mystyle} className={`${mystyles.noselect} navbar-item`} >{props.name}</Nav.Link>) ;
}

export {NavbarBtn} ;