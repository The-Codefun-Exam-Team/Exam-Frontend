import $ from 'jquery'
import { getCookie } from './cookie';

function getDebugProblem (debugProblemId)
{
    var return_data = 'Fail' ;
    $.ajax({
        type: 'GET',
        url: 'https://debug.codefun.vn/api/problems/' + debugProblemId,
        async: false ,
        headers: {
            Authorization: 'Bearer ' + getCookie('auth'),  
        },
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
        url: 'https://debug.codefun.vn/api/submission/' + submissionId,
        async: false,
        headers: {
            Authorization: 'Bearer ' + getCookie('auth'),  
        },
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
            accept: 'application/json',
        },
        contentType: 'application/x-www-form-urlencoded',
        data: {
            problem: problemId,
            code: code,
        },
        success: function(data,status)
        {
            console.log(data)
            console.log("Submit status: " + status)
        }
    })
}

export {getDebugProblem,getSubmission,submitDebug} ;