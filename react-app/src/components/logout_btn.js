import { NavbarBtn } from "./navbar_btn";
import { setCookie } from "../api/cookie"

function LogoutBtn() 
{

    const onClick = () =>
    {
        if ( window.confirm('Confirm log out?\nNote: all current on page data won\'t be saved') )
        {
            setCookie('auth',"",0) ;
            window.location = 'login' ;
        }
    }

    return (<NavbarBtn onClick={onClick} name="Logout" url=""/> ) ;
}

export { LogoutBtn } ;