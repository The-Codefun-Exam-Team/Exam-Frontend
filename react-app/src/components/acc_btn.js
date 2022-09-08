import { NavbarBtn } from "./navbar_btn";
import { verify } from "../api/codefunvn";  
function AccBtn(props)
{
    const accname = verify().username ;
    const accurl =  'https://codefun.vn/profile/' + accname ;

    return <NavbarBtn name={accname} url={accurl} target='_blank' /> ;
}

export {AccBtn}