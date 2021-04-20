let x = [1, 2, 5, 6, 5, 3, 6];
let max = x[0];

for (let i = 1; i < x.length; i++) {
    if(x[i]>max){
        max = x[i];
    }
}
console.log(max);
