// Create a concatStr function that takes 2 arguments and concatenate them

// t(() => concatStr('a', 'b') === 'ab')
// t(() => concatStr('yolo', 'swag') === 'yoloswag')

// handle non strings correctly
// t(() => concatStr(1, 2) === '12')
// t(() => concatStr(concatStr, concatStr) === String(concatStr).repeat(2))

function concatStr (a,b) {
    var texta = a.toString()
    var textb = b.toString()
    var returnVariable = texta+textb
    return returnVariable
};