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


    // cleanig extra words and dashes
    const filteredString = string.split(' ').filter(item => {
        if(item !== 'hundred' && item !== 'thousand' && item !== 'million'){
            return item
        }
    }).join('-').split('-')


    // comparing side

    let integersValue = ''

    filteredString.map(item => {
        arr.filter(item2 => {
            if(item.includes(item2)){
                integersValue  +=  item2
            }
        })
    })



   





    return integersValue


  }

  console.log(parseInt("two hundred forty-six"));



























  //https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript