snail = function(array) {


//  taking firth row and cleaning this row
    let returningArr = array[0]
    array[0] = 0
    let newArr = array.filter(item => item !== 0)

// taking last item each array and clearing them
    for(let i = 0; i < newArr.length; i++){
      returningArr[returningArr.length] = newArr[i][newArr[i].length - 1]
      newArr[i] = newArr[i].splice(0, newArr[i].length - 1)
    }

// taking last array by reverse and clearing it
    returningArr = [...returningArr, ...newArr[newArr.length - 1].reverse()] 
    newArr = newArr.filter((item, ind) => ind !== newArr.length - 1)

// taking firth item each array 
  for(let i = 0; i < newArr.length; i++){
    returningArr[returningArr.length] = newArr[i][newArr[i].length - 1]
    newArr[i] = newArr[i].splice(0, newArr[i].length - 1)
  }

   

    

    
    

}



//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]

// snail(array)


snail(array)


 