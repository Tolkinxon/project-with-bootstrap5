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

    const integerObj = {'zero': 0, 'one': 1, 'tw': 2, 'th': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,'forty': 4, 'fif': 5, 'hundred': 100, 'thousand': 1000, 'million': 1000000}


    
    const separatingArray = string.split(' ')

    for(let i = 0; i < separatingArray.length; i++){
        const item = separatingArray[i]
        const itemLast = separatingArray[i - 1]
        
        if(!item.includes('-') && !(item.slice(-2) === 'ty') && !(item.slice(-4) === 'teen')){
            
        }
        
    }

  








    // // generatin to integer side
    // finishedInteger = ''
   
    // finishedArr.map(item => { 
    //     finishedInteger += integerObj[item]
    // })


  
  }


  

parseInt("two hundredty forty-six")



























  //https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript