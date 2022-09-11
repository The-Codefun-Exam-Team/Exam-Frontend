import { cpp_format } from "./cpp_format"

function editDistance ( usercode , realcode )
{
    usercode = cpp_format(usercode)
    realcode = cpp_format(realcode)
    usercode = '#' + usercode
    realcode = '#' + realcode
    var dp = Array(realcode.length)
    var ndp = Array(realcode.length)
    for ( let i = 0 ; i < realcode.length ; i ++ )
    {
        dp[i] = i ;
    }
    for ( let i = 1 ; i < usercode.length ; i ++ )
    {
        for ( let j = 0 ; j < realcode.length ; j ++ )
        {
            if ( j === 0 )
            {
                ndp[j] = i ;
            }
            else if (usercode[i]===realcode[j])
            {
                ndp[j] = dp[j-1] ;
            }
            else
            {
                ndp[j] = 1 + Math.min(dp[j-1],ndp[j-1],dp[j]) ;
            }
        }
        for ( let j = 0 ; j < realcode.length ; j ++ )
        {
            dp[j] = ndp[j]
        }
    }
    
    return dp[realcode.length-1]

}

export {editDistance}