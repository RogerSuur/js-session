var details = {
    "customer": {
       "customerDetails": {
          "otherDetails": [
             {
                "customerDetails": {
                   "isMarried": false
                },
             },
             {
                "customerDetails": {
                   "isMarried": false
                },
             },
             {
                "customerDetails": {
                   "isMarried": false
                }
             }
          ]
       }
    }
 }

 console.log("All values are set to true=");
//  for (var index = 0; index < details.customer.customerDetails['otherDetails'].length; index++) {
//     details.customer.customerDetails['otherDetails'][index].customerDetails['isMarried'] = true;
//  }
//  for (var index = 0; index < details.customer.customerDetails['otherDetails'].length; index++) {
//     console.log("isMarried:"+details.customer.customerDetails['otherDetails'][index
//     ].customerDetails['isMarried']);
//  }
console.log(details.customer.customerDetails['otherDetails'][1].customerDetails['isMarried'])