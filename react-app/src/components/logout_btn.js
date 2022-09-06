import { NavbarBtn } from "./navbar_btn";
import { setCookie } from "../api/cookie"

function LogoutBtn() 
{
    const onClick = () =>
    {
        if ( window.confirm('All current on page data won\'t be saved') )
        {
            setCookie('auth',"",0)
        }
    }

    return <NavbarBtn onClick={onClick} name="Logout" url="login"/> 
}

export { LogoutBtn } ;