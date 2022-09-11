import $ from 'jquery'

function getDebugProblem (debugProblemId)
{
    var return_data = 'Fail' ;
    $.ajax({
        type: 'GET',
        url: 'http://bugsad.ddns.net/debug_problem',
        async: false ,
        success(data,status){
            console.log('Get problem infor status: ' + status ) ;
            return_data = data.data;
        },

        timeout: 5000
    })
    return return_data ;
}

function getSubmission (submissionId)
{
    var return_data = 'Fail' ;
    $.ajax({
        type: 'GET',
        url: 'http://bugsad.ddns.net/debug_submission/' + submissionId,
        async: false,
        success(data,status){
            console.log('Get submission infor status: ' + status ) ;
            return_data = data;
        },
        timeout: 5000 
    })
    return return_data ;
}

export {getDebugProblem,getSubmission} ;