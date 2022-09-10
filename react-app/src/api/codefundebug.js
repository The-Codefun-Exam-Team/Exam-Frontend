import $ from 'jquery'

function getDebugProblem (debugProblemId)
{
    var return_data = 'Fail' ;
    $.ajax({
        type: 'GET',
        url: 'https://112.137.129.136:444/debug_problem',
        async: false ,
        success(data,status){
            console.log('Get problem infor status: ' + status ) ;
            return_data = data.data;
        },

        timeout: 5000
    })
    return return_data ;
}

export {getDebugProblem} ;