"use strict";
// ex-1
// function sum(n){
//     if(n==1) return 1;
//     return n + sum(n-1);
    
// }

// console.log(sum(3))

// ex-2

// function factorial(n){
//     if(n==1) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(4))


// function repeatStr(str, repeatNumber) {

// ex-3
//     if (repeatNumber === 0) {
//         return '';
//     }
//     else {
//         return repeatStr(str, repeatNumber - 1) + ' ' + str
//     }
//     }
//     console.log(repeatStr("to", 2));
//     console.log(repeatStr("to", 4));
    
    //ex4
    function sum2(x, y) {
        if(x <= y){
            return x + sum2(x+1,y);
        }else{
            return 0 ;
        }
        
    
    
    }console.log(sum2(4, 5))
    console.log(sum2(3, 6))







    function sum2(x, y) {
        if(x==y) return b;
        return a + sum2(x+1,y)
    }

