let x = [1, 2, 5, 6, 5, 3, 6];


function findMinPos(arr){
    
    let max = x[0];
    position = 0;

    
for (let i = 1; i < x.length-1; i++) {
    if(x[i]>max){
        max = x[i];
        position  = i;
    }
}
return position;
}

findMinPos(x);

// let x = [1, 2, 5, 6, 5, 3, 6];
    6

// let max = x[0];


// for (let i = 1; i < x.length-1; i++) {
//     if(x[i]>max){
//         max = x[i];
//     }
// }
// console.log(max);
