import $ from 'jquery'
import { getCookie } from './cookie';

function getDebugProblem (debugProblemId)
{
    var return_data = 'Fail' ;
    $.ajax({
        type: 'GET',
        url: 'https://debug.codefun.vn/api/problems/' + debugProblemId,
        async: false ,
        success(data,status){
            console.log('Get problem infor status: ' + status ) ;
            return_data = data;
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
        url: 'https://debug.codefun.vn/api/debug_submission/' + submissionId,
        async: false,
        success(data,status){
            console.log('Get submission infor status: ' + status ) ;
            return_data = data;
        },
        timeout: 5000 
    })
    return return_data ;
}

function submitDebug (code,problemId)
{
    return $.ajax({
        type: 'POST',
        url: 'https://debug.codefun.vn/api/submit/',
        timeout: 5000,
        headers: {
            Authorization: 'Bearer ' + getCookie('auth'),
        },
        contentType: 'application/x-www-form-urlencoded; encode=gzip',
        
        data: {
            problem: problemId,
            code: JSON.stringify(code),
        }
    })
}

export {getDebugProblem,getSubmission,submitDebug} ;