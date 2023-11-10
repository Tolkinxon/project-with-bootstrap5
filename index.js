function add(x){
    let sum = x;
    function resultFn(y){
        sum += y;
        return resultFn;
    }
    resultFn.valueOf = function(){
            return sum;
        };
        console.log(resultFn.valueOf);
    return resultFn;
}





const a = add(1)(2)