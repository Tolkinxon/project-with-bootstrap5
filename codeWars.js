snail = function(array) {

if(array.length === 1){
  return array[0]
}

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
  if(newArr.length === 1){
    returningArr = [...returningArr, ...newArr[0]]
    return returningArr
  }
  else{
    returningArr = [...returningArr, ...newArr[newArr.length - 1].reverse()] 
    newArr = newArr.filter((item, ind) => ind !== newArr.length - 1)
  }




// taking firth item each array 
  for(let i = 0; i < newArr.length; i++){
    returningArr[returningArr.length] = newArr[newArr.length - (i + 1)][0]
    newArr[newArr.length - (i + 1)] = newArr[newArr.length - (i + 1)].splice(1, newArr[i].length)
  }



  if(newArr.length === 1){
    returningArr = [...returningArr, ...newArr[0]]
    return returningArr
  }
  else{
    return [...returningArr,...snail(newArr)]
  }
}



//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript



 