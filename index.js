function positiveSum(arr) {
  let sum = 0
 for(let i = 0; i < arr.length; i++){
    sum = sum + (arr[i] >= 0 ? arr[i] : 0 )
 }

  return sum
}

const array = [1,2,3,4,-23,0,5]

console.log(positiveSum(array));


