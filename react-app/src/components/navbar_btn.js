import colors from '../config/color.ts'
import mystyles from '../config/styles.module.css'
import Nav from 'react-bootstrap/Nav';

function NavbarBtn(props)
{
    const mystyle = {
        color: colors[0] ,
        backgroundColor: 'transparent' ,
        fontSize: 'large',
        fontWeight: '400',
        paddingLeft: '20px',
        borderLeft: `3px solid ${colors[0]}`,
        marginRight: '10px',
        marginLeft: '10px',
        width:'fit-content',
        paddingTop: '0px',
        paddingBottom: '0px',
        marginTop: '2px',
        marginBottom: '5px'
    };


    return (<Nav.Link href={props.url} style={mystyle} className={`${mystyles.noselect} navbar-item`}>{props.name}</Nav.Link>) ;
}

export {NavbarBtn} ;