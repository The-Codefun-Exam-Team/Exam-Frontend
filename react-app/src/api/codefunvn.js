import $ from 'jquery'
import { getCookie } from './cookie';

function login ( dt_username , dt_password )
{
    var return_data = "Fail";
    $.ajax({
        type:'POST',
        url: 'https://codefun.vn/api/auth',
        contentType: 'application/x-www-form-urlencoded; encode=gzip',
        data: {
            username: dt_username,
            password: dt_password,
        },
        async: false,
        success: function(data,status)
        {
            return_data = data.data ;
            console.log('Login status: ' + status)
        }

    })
    return return_data ;
}


function verify ()
{
    var return_data = "Fail";
    $.ajax({
        type: 'POST',
        url: 'https://codefun.vn/api/verify',
        headers: {
            Authorization: 'Bearer ' + getCookie('auth'),
        },
        contentType: 'application/x-www-form-urlencoded; encode=gzip',
        async: false,
        success: function(data,status,xhr)
        {
            console.log('Verify status: ' + status ) ;
            return_data = data.data ;
        }
    })
    return return_data ;
}

export {login,verify} ;