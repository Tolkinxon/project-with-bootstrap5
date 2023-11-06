
function solution(string) {
   
   const camelCase = [...string].filter(item => {
                                                    return item != item.toLocaleLowerCase()
                                                })
    let strr = ''
    camelCase.map(item => {
        strr.search(item) === -1 ? strr += item : strr
    })

    const camelCase2 = [...strr]

   let str = string
   camelCase2.forEach(item => str = str.split(item).join(` ${item}`))

   return str
    
}








