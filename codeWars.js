// Array.prototype.sameStructureAs = function (other) {
    
//     const arr1Str = JSON.stringify(this)
//     const arr2Str = JSON.stringify(other)
    
//     let i = 0
//     let check = 0
    
//         for(let key of arr1Str){
    
    
//             if(isNaN((+key + 0)) && key === arr2Str[i]){
//                 check++
//                 if(key === "\"" ){
//                     return true
//                 }
//             }
    
//             if(!isNaN((+key + 0))){
//                 check++
//             }
    
//             i++
        
//         }
    
    
//         if(check === arr1Str.length){
//             return true
//         }
//         else{
//             return false
//         }
//     }
    
//     const arr =  [1,'[',']']



    


//     // arr.sameStructureAs(['[',']',1])
    
    
//     console.log(arr.sameStructureAs([1,'[',']']));




    
function cuttingSpace(string){

    let assingingString = string 
  
    for(let i = 0; i < 2; i++){
  
      for(let j = 0; j < assingingString.length; j++){
        if(assingingString[j] !== ' '){
          assingingString = assingingString.slice(j)
          break;
        }
      }
  
      if(i === 1){
        return [...assingingString].reverse().join('')
      }
  
      assingingString = [...assingingString].reverse().join('')
  
    }
  }
  

  
  
  function decodeMorse(string){
  
  const compressString = cuttingSpace(string)
    
  const arr = compressString.split(' ')
  
  
  let word = ''
  
  for(let key of arr){
    switch(key){
      case '.-': word += 'A'; break;
      case '-...': word += 'B'; break;
      case '-.-.': word += 'C'; break;
      case '-..': word += 'D'; break;
      case '.': word += 'E'; break;
      case '..-.': word += 'F'; break;
      case '--.': word += 'G'; break;
      case '....': word += 'H'; break;
      case '..': word += 'I'; break;
      case '.---': word += 'J'; break;
      case '-.-': word += 'K'; break;
      case '.-..': word += 'L'; break;
      case '--': word += 'M'; break;
      case '-.': word += 'N'; break;
      case '---': word += 'O'; break;
      case '.--.': word += 'P'; break;
      case '--.-': word += 'Q'; break;
      case '.-.': word += 'R'; break;
      case '...': word += 'S'; break;
      case '-': word += 'T'; break;
      case '..-': word += 'U'; break;
      case '...-': word += 'V'; break;
      case '.--': word += 'W'; break;
      case '-..-': word += 'X'; break;
      case '-.--': word += 'Y'; break;
      case '--..': word += 'Z'; break;
  
      case '.----': word += '1'; break;
      case '..---': word += '2'; break;
      case '...--': word += '3'; break;
      case '....-': word += '4'; break;
      case '.....': word += '5'; break;
      case '-....': word += '6'; break;
      case '--...': word += '7'; break;
      case '---..': word += '8'; break;
      case '----.': word += '9'; break;
      case '-----': word += '0'; break;
      case '...---...': word += 'SOS'; break;
      case '-.-.--': word += '!'; break;
      case '.-.-.- ': word += '.'; break;

  
      case '': word += ' '; break;
    }
  }
  
   const readyWord = word.split('  ').join(' ')
   return readyWord
  
  }
  
  
  console.log(decodeMorse('  ..-. .- .-. --- --. .- -  '));

  
  
  
  

  
  
  
    
    
    