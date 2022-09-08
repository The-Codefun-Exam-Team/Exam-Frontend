import { NavbarBtn } from "./navbar_btn";
import { verify } from "../api/codefunvn";

function AccBtn(props)
{
    const verifydata = verify()
    if ( verifydata === 'Fail' )
    {
        alert('Token not found, please log in again')
        window.location = '/login'
    }
    const accname = verifydata.username ;
    const accurl =  'https://codefun.vn/profile/' + accname ;

    return <NavbarBtn name={accname} url={accurl} target='_blank' /> ;
}

export {AccBtn}