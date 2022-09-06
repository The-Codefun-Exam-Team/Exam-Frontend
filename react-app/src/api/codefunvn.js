import $ from 'jquery'

function login ( dt_username , dt_password )
{
    var return_data = "Fail";
    $.ajax({
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


export {login} ;