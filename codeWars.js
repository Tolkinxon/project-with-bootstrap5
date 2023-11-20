snail = function(array) {

    let returningArr = array[0]

    array[0] = 0

    let newArr = array.filter(item => item !== 0)

    for(let i = 0; i < newArr.length; i++){
      returningArr[returningArr.length] = newArr[i][newArr[i].length - 1]
      newArr[i] = newArr[i].splice(0, newArr[i].length - 1)
    }

    returningArr = [...returningArr, ...newArr[newArr.length - 1].reverse()] 
    newArr[newArr.length - 1].reverse()

    newArr.splice(0, 1)

    
    console.log(newArr);

    
    

}



//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]

// snail(array)


array.slice(0, 2)
console.log(array);


 