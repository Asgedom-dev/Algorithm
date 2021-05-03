// let x = "name";

// function lengthString(x){
//     if (x == "" || x == null){
//         return 0;
//     }else{
//             return 1 + lengthString(x.substring(1));
//     }
// }

// console.log(nameString(x));

/********************************************************************* */
// let name = "name";

// function printChar(name){
//     if (name == "" || name == null){
//         return 0;
//     }else{
//              console.log(name.charAt(0));
//         return 1 + printChar(name.substring(1));
//     }
// }

// printChar(name);
/********************************************************************* */
// let number = 5;
// function numbers(number){
//     if(number == 0){
//         return 0;
//     }else{
//         return 5 * 5 + numbers(number-1);
//     }
// }
// console.log(numbers(number));
/********************************************************************* */
// let result = "hello";
// function stuuter(result){
//     if(result == "" || result == null){
//         return "";
//     }else{
//         // console.log(result.charAt(0) + result.charAt(0));
//         // return 1 + stuuter(result.substring(1));
//         // to print in one line
//         return stuuter(result.substring(1));
//     }
// }
// console.log(stuuter(result));
/********************************************************************* */

// function fac(n){
//     if(n == 0){
//         return 1;
//     }else{
//         return n * fac(n-1);
//     }
// }
// console.log(fac(5));
// console.log(Math.pow(2,7));
// let x = [1, 2, 3, 4, 5];

// function helperFun(x, i) {
//   if (i < 0) {
//     return 0;
//   } else {
//     return x[i] + helperFun(x, i - 1);
//   }
// }
// function sumofarray(x) {
//   return helperFun(x, x.length - 1);
// }

// console.log(sumofarray(x));

//how to find maximum number
let x = [1,2,3,2,4,5,6,34,34];
// let max = x[0] ;
// function maximumNumber(x){
// for(let i=1; i<x.length; i++){
//     if(x[i] > max){
//         max = x[i];
//     }
// }return max;
// }
// console.log(maximumNumber(x));

function removeDuplicate(x){
    let y = [];
    for(let i=0; i<x.length;i++){
        if(!y.includes(x[i])){
            y.push(x[i])
        }
    }return y;
}
console.log(removeDuplicate(x))