function solution(str){
    const arr = []
    for(i = 0; i < str.length; i += 2){

        arr[i / 2] = i === str.length - 1  ? str[i] + '_' :  str[i] + str[i + 1] 
    }

    console.log(arr);
}

solution('')
