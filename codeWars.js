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
    returningArr[returningArr.length] = newArr[newArr.length - (i + 1)][0]
    newArr[newArr.length - (i + 1)] = newArr[newArr.length - (i + 1)].splice(1, newArr[i].length)
  }


  
  console.log(snail(newArr));



  if(newArr.length === 1){
    returningArr = [...returningArr, ...newArr[0]]
    return returningArr
  }


    

}



//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

array = [[1,2,3,4],
         [12,13,14,5],
         [11,16,15,6],
         [10,9,8,7]]

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]

// array = [[1,2],
//          [4,3]]

// snail(array)


// console.log(snail(array));
snail(array)


 