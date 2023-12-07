// function add(x){
//     let sum = x;
//     function resultFn(y){
//         sum += y;
//         return resultFn;
//     }
//     resultFn.valueOf = function(){
//             return sum;
//         };
//         console.log(resultFn.valueOf);
//     return resultFn;
// }





// const a = add(1)(2)

// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript




function parseInt(string) {
    
    
    
    const arr = ['zero','one', 'tw', 'th', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven','forty', 'fif']

    const integerObj = {'zero': 0, 'one': 1, 'tw': 2, 'th': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,'forty': 4, 'fif': 5}


    // cleanig extra words and dashes
    const filteredString = string.split(' ').filter(item => {
        if(item !== 'hundred' && item !== 'thousand' && item !== 'million'){
            return item
        }
    })



    // // comparing side
    // let integersValue = ''

    // filteredString.map(item => {
    //     arr.filter(item2 => {
    //         if(item.includes(item2)){
    //             integersValue  +=  item2 + ' '
    //         }
    //     })
    // })
    // const finishedArr = integersValue.split(' ').slice(0, -1)


    // // generatin to integer side
    // finishedInteger = ''
   
    // finishedArr.map(item => { 
    //     finishedInteger += integerObj[item]
    // })


   return filteredString
  }


  

  console.log(parseInt("two hundred forty-six"));



























  //https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript