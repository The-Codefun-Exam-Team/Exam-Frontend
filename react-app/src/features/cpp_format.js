export const allLineComment = new RegExp(/\/\*.+?\*\//,'sg');
export const oneLineComment = new RegExp(/\/\/.+?\n/,'sg')
export const spacing = new RegExp(/[\n|\t| |\u2028|\u2029|\r]/,'g')

function removeComment(code)
{
    var ncode = code.replaceAll(allLineComment,"")
    var nncode = ncode.replaceAll(oneLineComment,"")
    return nncode
}

function removeSpacing(code)
{
    var ncode = code.replaceAll(spacing,"")
    return ncode
}



function cpp_format (code)
{
    return removeSpacing(removeComment(code)) ;
}

export {cpp_format}