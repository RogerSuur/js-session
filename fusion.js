function fusion(input, input2) {

    const inputValues = Object.values(input)
    const inputKeys = Object.keys(input)
    const input2Values = Object.values(input2)
    const input2Keys = Object.keys(input2)

    for (let i = 0; i < inputKeys.length; i++) {
        console.log(i, inputKeys[i], inputValues[i])
        // value1 = input.inputValues[i]
        // value2 = input2.input2Values[i]

        // key1 = input.inputKeys[i]
        // key2 = input2.input2Keys[i]

        if (typeof inputValues[i] === typeof input2Values[i]) { // checks if both of them are type of numbers

            switch (typeof inputValues[i]) {
                case "number":
                    var answer = input
                    if (input.hasOwnProperty([inputKeys[i]]) && input2.hasOwnProperty([inputKeys[i]])) {
                        answer[inputKeys[i]] = input[inputKeys[i]] + input2[inputKeys[i]]
                    } else {
                        answer[inputKeys[i]] = input[inputKeys[i]]
                    }
                    break;
                case "string":
                    var answer = input
                    if (input.hasOwnProperty([inputKeys[i]]) && input2.hasOwnProperty([inputKeys[i]])) {
                        answer[inputKeys[i]] = input[inputKeys[i]] + ' ' + input2[inputKeys[i]]
                    } else {
                        answer[inputKeys[i]] = input[inputKeys[i]]
                    }
                    break;
                case 'object':
                    var answer = input
                    if (Array.isArray(inputValues[i])) {
                        if (input.hasOwnProperty([inputKeys[i]]) && input2.hasOwnProperty([inputKeys[i]])) {
                            // answer[inputKeys[i]] = inputValues.concat(input, input2)
                            answer[inputKeys[i]] = input[inputKeys[i]].concat(input2[inputKeys[i]])
                        } else {
                            answer[inputKeys[i]] = input[inputKeys[i]]
                        }
                    } else {
                        answer[inputKeys[i]] = fusion(input[inputKeys[i]], input2[inputKeys[i]])
                    }
                    break;
            }   //answer[inputKeys[i]] = input[inputKeys[i]] + input2[inputKeys[i]]
        } else {
            var answer = input
            if (input.hasOwnProperty([inputKeys[i]]) && input2.hasOwnProperty([inputKeys[i]])) {
                answer[inputKeys[i]] = input2[inputKeys[i]]
            } else {
                answer[inputKeys[i]] = input[inputKeys[i]]
            }
            break;
        }
    }

    //new loop for input2 keys, if not same as input 1, add them to answer
    for (let i = 0; i < input2Keys.length; i++) {
        if (input2Keys[i] !== inputKeys[i]) {
            answer[input2Keys[i]] = input2[input2Keys[i]]
        }
    }
    console.log("answer", answer)
    return answer

}