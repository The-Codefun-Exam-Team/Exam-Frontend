import $ from 'jquery'
import { getCookie , setCookie} from './cookie';

function login ( dt_username , dt_password )
{
    
    return  $.ajax({
        type:'POST',
        url: 'https://codefun.vn/api/auth',
        contentType: 'application/x-www-form-urlencoded; encode=gzip',
        data: {
            username: dt_username,
            password: dt_password,
        },
        success: function(data,status)
        {
            console.log('Login status: ' + status)
            setCookie('auth',data.data,7)
            window.location = '/'
        },
        error: function()
        {
            alert("Login unsuccessfully")
            
        },
        timeout: 5000

    })
}


function verify ()
{
    return $.ajax({
        type: 'POST',
        url: 'https://codefun.vn/api/verify',
        headers: {
            Authorization: 'Bearer ' + getCookie('auth'),
        },
        contentType: 'application/x-www-form-urlencoded; encode=gzip',
        success: function(data,status)
        {
            console.log('Verify status: ' + status ) ;
            
        },
        error: function()
        {
            alert("Token fail, please login again.")
            window.location = '/login'
        },
        timeout: 5000
    })
    
}

export {login,verify} ;