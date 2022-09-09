import { retrieveFollowingIdentifier } from 'ace-builds/src-noconflict/ext-language_tools';
import $ from 'jquery'

function getDebugProblem (debugProblemId)
{
    var return_data = 'Fail' ;
    $.ajax({
        type: 'GET',
        url: 'http://112.137.129.136:1700/debug_problem',
        async: false ,
        success(data,status){
            console.log('Get problem infor status: ' + status ) ;
            return_data = data.data;
        }
    })
    return return_data ;
}

export {getDebugProblem} ;