// const path = require("path");

// const fs = require("fs")


// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));

// console.log(path.dirname(__filename));
// console.log(path.dirname(__dirname));
// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));
// console.log(path.parse(__filename).base);
// console.log(path.join( 'backend','forntend', 'index.html'));
// console.log(path.resolve('backend',"./frontend",'index.html'));
"scissors", "paper","rock"


const rps = (p1, p2) => {
    const w = p1 + p2

    if(
        w[0] === 's' && w[w.length - 1 ] === 'r' ||
        w[0] === 'p' && w[w.length - 1] === 'k' || 
        w[0] === 'r' && w[w.length - 1] === 's'
       ){
        return '"Player 1 won!"'
    }

};



console.log(rps("scissors", "paper"));
https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

