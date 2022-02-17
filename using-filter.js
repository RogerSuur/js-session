
// filter1DistinctVowel([
//     'Alabama',
//     'Alaska',
//     'Arizona',
//     'Arkansas',
//     'California',
//     'Colorado',
//     'Connecticut',
//     'Delaware',
//     'Florida',
//     'Georgia',
//     'Hawaii',
//     'Idaho',
//     'Illinois',
//     'Indiana',
//     'Iowa',
//     'Kansas',
//     'Kentucky',
//     'Louisiana',
//     'Maine',
//     'Maryland',
//     'Massachusetts',
//     'Michigan',
//     'Minnesota',
//     'Mississippi',
//     'Missouri',
//     'Montana',
//     'Nebraska',
//     'Nevada',
//     'New Hampshire',
//     'New Jersey',
//     'New Mexico',
//     'New York',
//     'North Carolina',
//     'North Dakota',
//     'Ohio',
//     'Oklahoma',
//     'Oregon',
//     'Pennsylvania',
//     'Rhode Island',
//     'South Carolina',
//     'South Dakota',
//     'Tennessee',
//     'Texas',
//     'Utah',
//     'Vermont',
//     'Virginia',
//     'Washington',
//     'West Virginia',
//     'Wisconsin',
//     'Wyoming',
//   ])

//Create a function filterShortStateName that takes an array of strings and that
// returns the ones with less than 7 characters.
// Example: 'Iowa' only contains 4 characters

function filterShortStateName(inputvalue) {
    var result = inputvalue.filter(word => word.length < 7);
    // console.log(result);
    return result
};

// 'Alabama',
//     'Alaska',
//     'Arizona',
//     'Arkansas',
//     'Idaho',
//     'Illinois',
//     'Indiana',
//     'Iowa',
//     'Ohio',
//     'Oklahoma',
//     'Oregon',
//     'Utah',

// Create a function filterStartVowel that takes an array of strings and that returns only the ones that start with a vowel (a,e,i,o,u).
// Example: 'Alabama' starts with a vowel

function filterStartVowel(inputvalue) {
    var result
    result = inputvalue.filter(function (element) {
        let vowels = /[aeiou]/gi;
        let searchVowel = element[0].match(vowels);
        //console.log("result:", searchVowel) 
        if (searchVowel !== null) {
            return element
        }
        //console.log(element[0])
    })
    return result
}

// 'California',
//     'Louisiana',
//     'North Carolina',
//     'South Carolina',
//     'South Dakota',
//     'West Virginia',

// Create a function filter5Vowels that takes an array of strings and that returns only the ones which contain at least 5 vowels (a,e,i,o,u).
// Example: 'California' contains at least 5 vowels

function filter5Vowels(inputvalue) {
    var result
    result = inputvalue.filter(function (element) {
        let vowels = /[aeiou]/gi;
        let searchVowel = element.match(vowels);
        //  console.log("searchVowel length:", searchVowel.length, element) 
        if (searchVowel.length >= 5) {
            return element
        }
        //console.log(element[0])
    })
    return result
};

// Create a function filter1DistinctVowel that takes an array of strings and that returns only the ones which vowels are of only one distinct one (a,e,i,o,u).
// Example: 'Alabama' only contains 1 distinct vowels 'a'.

function filter1DistinctVowel(inputvalue) {
    var result
    result = inputvalue.filter(function (element) {
        let vowels = /[aeiou]/gi;
        let searchVowel = element.match(vowels);
        //console.log("Searchvowels:", searchVowel)
        var vowel_list = 'aeiou'
        let distinctVowel = true
        //console.log(searchVowel)
        //Tee kaks loopi searchVoweli kohta ja võrdle elemente, kui kõik samad siis on Alabama.
        for (let i = 0; i < searchVowel.length; i++) {
            const el = searchVowel[i];
            for (let j = 1; j < searchVowel.length; j++) {
                if (searchVowel[i].toLowerCase() !== searchVowel[j].toLowerCase()) {
                    distinctVowel = false
                    //console.log(element, "is not distinct:")
                    { break }
                }

            }
            // console.log(el, element)

        }
        if (distinctVowel) {
            //console.log(element)
            return element
        }

    })
    //console.log(result)
    return result
};

// Create a function multiFilter that takes an array of objects and that returns only the ones which:
// the key capital contains at least 8 characters.
// the key name does not start with a vowel
// the key tag has at least one vowel.
// the key region is not 'South'
// Example of an array of objects matching the criterias:
// [
//   { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
//   { tag: 'PA', name: 'Pennsylvania', capital: 'Harrisburg', region: 'Northeast' }
// ]

multiFilter([{ tag: 'AL', name: 'Alabama', capital: 'Montgomery', region: 'South' },
{ tag: 'AK', name: 'Alaska', capital: 'Juneau', region: 'West' },
{ tag: 'AZ', name: 'Arizona', capital: 'Phoenix', region: 'West' },
{ tag: 'AR', name: 'Arkansas', capital: 'Little Rock', region: 'South' },
{ tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
{ tag: 'CO', name: 'Colorado', capital: 'Denver', region: 'West' },
{
    tag: 'CT',
    name: 'Connecticut',
    capital: 'Hartford',
    region: 'Northeast',
},
{ tag: 'DE', name: 'Delaware', capital: 'Dover', region: 'South' },
{
    tag: 'DC',
    name: 'District Of Columbia',
    capital: 'Washington',
    region: 'South',
},
{ tag: 'FL', name: 'Florida', capital: 'Tallahassee', region: 'South' },
{ tag: 'GA', name: 'Georgia', capital: 'Atlanta', region: 'South' },
{ tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
{ tag: 'ID', name: 'Idaho', capital: 'Boise', region: 'West' },
{
    tag: 'IL',
    name: 'Illinois',
    capital: 'Springfield',
    region: 'Midwest',
},
{
    tag: 'IN',
    name: 'Indiana',
    capital: 'Indianapolis',
    region: 'Midwest',
},
{ tag: 'IA', name: 'Iowa', capital: 'Des Moines', region: 'Midwest' },
{ tag: 'KS', name: 'Kansas', capital: 'Topeka', region: 'Midwest' },
{ tag: 'KY', name: 'Kentucky', capital: 'Frankfort', region: 'South' },
{ tag: 'LA', name: 'Louisiana', capital: 'Baton Rouge', region: 'South' },
{ tag: 'ME', name: 'Maine', capital: 'Augusta', region: 'Northeast' },
{ tag: 'MD', name: 'Maryland', capital: 'Annapolis', region: 'South' },
{
    tag: 'MA',
    name: 'Massachusetts',
    capital: 'Boston',
    region: 'Northeast',
},
{ tag: 'MI', name: 'Michigan', capital: 'Lansing', region: 'Midwest' },
{ tag: 'MN', name: 'Minnesota', capital: 'St. Paul', region: 'Midwest' },
{ tag: 'MS', name: 'Mississippi', capital: 'Jackson', region: 'South' },
{
    tag: 'MO',
    name: 'Missouri',
    capital: 'Jefferson City',
    region: 'Midwest',
},
{ tag: 'MT', name: 'Montana', capital: 'Helena', region: 'West' },
{ tag: 'NE', name: 'Nebraska', capital: 'Lincoln', region: 'Midwest' },
{ tag: 'NV', name: 'Nevada', capital: 'Carson City', region: 'West' },
{
    tag: 'NH',
    name: 'New Hampshire',
    capital: 'Concord',
    region: 'Northeast',
},
{
    tag: 'NJ',
    name: 'New Jersey',
    capital: 'Trenton',
    region: 'Northeast',
},
{ tag: 'NM', name: 'New Mexico', capital: 'Santa Fe', region: 'West' },
{ tag: 'NY', name: 'New York', capital: 'Albany', region: 'Northeast' },
{
    tag: 'NC',
    name: 'North Carolina',
    capital: 'Raleigh',
    region: 'South',
},
{
    tag: 'ND',
    name: 'North Dakota',
    capital: 'Bismarck',
    region: 'Midwest',
},
{ tag: 'OH', name: 'Ohio', capital: 'Colombus', region: 'Midwest' },
{
    tag: 'OK',
    name: 'Oklahoma',
    capital: 'Oklahoma City',
    region: 'South',
},
{ tag: 'OR', name: 'Oregon', capital: 'Salem', region: 'West' },
{
    tag: 'PA',
    name: 'Pennsylvania',
    capital: 'Harrisburg',
    region: 'Northeast',
},
{
    tag: 'RI',
    name: 'Rhode Island',
    capital: 'Providence',
    region: 'Northeast',
},
{
    tag: 'SC',
    name: 'South Carolina',
    capital: 'Columbia',
    region: 'South',
},
{ tag: 'SD', name: 'South Dakota', capital: 'Pierre', region: 'Midwest' },
{ tag: 'TN', name: 'Tennessee', capital: 'Nashville', region: 'South' },
{ tag: 'TX', name: 'Texas', capital: 'Austin', region: 'South' },
{ tag: 'UT', name: 'Utah', capital: 'Salt Lake City', region: 'West' },
{
    tag: 'VT',
    name: 'Vermont',
    capital: 'Montpelier',
    region: 'Northeast',
},
{ tag: 'VA', name: 'Virginia', capital: 'Richmond', region: 'South' },
{ tag: 'WA', name: 'Washington', capital: 'Olympia', region: 'West' },
{
    tag: 'WV',
    name: 'West Virginia',
    capital: 'Charleston',
    region: 'South',
},
{ tag: 'WI', name: 'Wisconsin', capital: 'Madison', region: 'Midwest' },
{ tag: 'WY', name: 'Wyoming', capital: 'Cheyenne', region: 'West' },])

function multiFilter(inputvalue) {
    var answer

    answer = inputvalue.filter(function (element) {
        var capitalBool = false
        var keyNameStartNoVowel = false
        var keyTagVowel = false
        var keyRegionNotSouth = false
        if (element.capital.length >= 8) {
            //console.log(element.capital.length, element)
            capitalBool = true
        }
        const regex = /^[aeiouAEIOU]/g
        const regexT = /[aeiouAEIOU]/g
        let keyNameStart = element.name.match(regex)
        let keyTag = element.tag.match(regexT)
        // console.log("keyTag", keyTag, "element", element.tag)

        if (keyNameStart === null) {
            //console.log(keyNameStart, element.name)
            keyNameStartNoVowel = true
        }
        if (keyTag !== null) {
            //console.log(keyTag, element.tag)
            keyTagVowel = true
        }
        if (element.region !== 'South') {
            keyRegionNotSouth = true
        }
        if (capitalBool && keyNameStartNoVowel && keyTagVowel && keyRegionNotSouth) {
            //console.log(element)
            return element
        }
    })
    //console.log(answer)
    return answer
}
// Special instruction
// The goal of this exercise is to learn to use filter, as such all your solution MUST use filter