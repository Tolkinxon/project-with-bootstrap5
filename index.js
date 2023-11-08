function firstNonRepeatingLetter(s) {
    // Add your code here
    const arr = [...s]

    const arr2 = arr.filter(item => {
               
               return arr.filter( thing => { return item.toLowerCase() === thing.toLowerCase() }  ).length === 1 

             
            })[0] 
            
    return arr2 === undefined ? '' : arr2
}

