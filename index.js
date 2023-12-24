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








function numberMaker(string) {     
    
    const arr = ['zero','one', 'tw', 'th', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',  'eleven','for', 'fif', 'hundred', 'thousand','million']

    const integerObj = {'zero': 0, 'one': 1, 'tw': 2, 'th': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,'for': 4, 'fif': 5, 'hundred': 100, 'million': 1000000, 'thousand': 1000}


    // separating to items
    

    const separatingArray = string.split(' ')

    const preparingList = []


     // converting to numbers
    for(let i = 0; i < separatingArray.length; i++){

        const item = separatingArray[i] 

        if(!item.includes('-') && (item.slice(-2) === 'ty') && !(item.slice(-4) === 'teen')){

            for(let key of arr){
                 if(item.includes(key)){
                     preparingList[i] = integerObj[key] * 10
                 }
             }
         }
         else if(!item.includes('-') && !(item.slice(-2) === 'ty') && (item.slice(-4) === 'teen')){
            for(let key of arr){
                 if(item.includes(key)){
                     preparingList[i] = integerObj[key] + 10
                 }
             }
         }

        else if(item.includes('-') && !(item.slice(-2) === 'ty') && !(item.slice(-4) === 'teen')){

            let assignTens = 0
            item.split('-').map(itemMap => {
                for(let key of arr){

                    if(itemMap.includes(key)){
                        if(assignTens !== 0){
                            assignTens = assignTens * 10 + integerObj[key]
                        }
                        else{
                            assignTens = integerObj[key]
                        }
                    }
                }
            })
            preparingList[i] = assignTens
         }



         else if(!item.includes('-') && !(item.slice(-2) === 'ty') && !(item.slice(-4) === 'teen')){
            for(let key of arr){
                 if(item.includes(key)){
                     preparingList[i] = integerObj[key]

                 }
             }
         }           
    }

    //calculating number
    let preparingNumber = 0   

        if(preparingList.length === 3){
            preparingNumber = (preparingList[0] * 100) + preparingList[2]
        }
        else if(preparingList.length === 2){
            preparingNumber = (preparingList[0] * 100) 
        }
        else{
            preparingNumber = preparingList[0]
        }


return preparingNumber
}








function parseInt(string) {

    let millionArr = []
    let thousandArr = []


    if(string.includes('million')){
        let num = 0
        if(string.slice(-7) === 'million'){
           millionArr = string.split(' ').filter(item => item !== 'and').join(' ').split(' million')
           return numberMaker(millionArr[0]) * 1000000
        }

        millionArr = string.split(' ').filter(item => item !== 'and').join(' ').split(' million ')
        num = numberMaker(millionArr[0]) * 1000000
        
        if(millionArr[1].includes('thousand')){
            if(millionArr[1].slice(-8) === 'thousand'){
                thousandArr = millionArr[1].split(' thousand')
                return num += numberMaker(thousandArr[0]) * 1000
             }

            thousandArr = millionArr[1].split(' thousand ')
            console.log(thousandArr[0]);
            num += numberMaker(thousandArr[0]) * 1000
            if (thousandArr[1] !== '') {
                num += numberMaker(thousandArr[1])
            }

        }
        else if (millionArr[1] !== '') {
            num += numberMaker(millionArr[1])
        }

        return num      
        
        
    }
   



}





console.log(parseInt("one hundred twenty-five million five hundred and eleven thousand seven hundred fifty-one"));


























  //https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript