// Create a nasa function that takes a number N as a parameter and returns a string with all numbers from 1 to the N separated by whitespace, with three exceptions:

// For numbers divisible by 3, add 'NA'.
// For numbers divisible by 5, add 'SA'.
// For the number that are divisible by 3 and 5 add 'NASA'.

console.log(nasa(15)); // '1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA'))
console.log(nasa(60)); // { NA: 16, NASA: 4, SA: 8, _: 32 }))
console.log(nasa(100)); // { NA: 27, NASA: 6, SA: 14, _: 53 }))
console.log(nasa(300)); // { NA: 80, NASA: 20, SA: 40, _: 160 }))
console.log(nasa(900)) ;// 'NA 892 893 NA SA 896 NA 898 899 NASA'))





function nasa(N){

    var answer = ''

    for (let i = 1; i <= N; i++) {

        if( i% 3 == 0 && i %5 == 0) {
            answer += 'NASA'
            answer += ' '
        } else if (i % 3 == 0) {
            answer += 'NA'
            answer += ' '
        } else if (i % 5 == 0) {
            answer += 'SA'
            answer += ' '
        } else {
        answer += i
        answer += ' '
        }
    }
    return answer


};