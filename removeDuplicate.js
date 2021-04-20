let x = [1125465];
console.log(x.length);
let newList = [];
for(let i=0; i<x.length;i++){
    if(!(newList.includes(x[i]))){
        newList.push(x[i])
    }
}console.log(newList);