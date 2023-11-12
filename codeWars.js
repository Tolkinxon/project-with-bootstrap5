Array.prototype.sameStructureAs = function (other) {
    
    const arr1Str = JSON.stringify(this)
    const arr2Str = JSON.stringify(other)
    
    let i = 0
    let check = 0
    
        for(let key of arr1Str){
    
    
            if(isNaN((+key + 0)) && key === arr2Str[i]){
                check++
                if(key === "\"" ){
                    return true
                }
            }
    
            if(!isNaN((+key + 0))){
                check++
            }
    
            i++
        
        }
    
    
        if(check === arr1Str.length){
            return true
        }
        else{
            return false
        }
    }
    
    const arr =  [1,'[',']']



    


    // arr.sameStructureAs(['[',']',1])
    
    
    console.log(arr.sameStructureAs([1,'[',']']));
    
    
    
    // https://www.codewars.com/kata/520446778469526ec0000001/train/javascript