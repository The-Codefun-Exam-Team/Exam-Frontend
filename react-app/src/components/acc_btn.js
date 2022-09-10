import { NavbarBtn } from "./navbar_btn";
import { verify } from "../api/codefunvn";
import { useEffect, useState } from "react";

function AccBtn(props)
{
    const [verifydata,setverifydata] = useState(0)
    useEffect(()=>{
        verify().done(function(response){setverifydata(response.data)})
    },[])


    const accname = verifydata.username ;
    const accurl =  'https://codefun.vn/profile/' + accname ;

    return <NavbarBtn name={accname} url={accurl} target='_blank' /> ;
}

export {AccBtn}