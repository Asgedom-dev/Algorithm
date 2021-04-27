let x = [1, 2, 3, 5, 7, 9, 2];

function bublesort(x) {
  for (let i = 0; i < x.length-1; i++) {
    for (let j = 0; j < x.length - i - 1; j++) {
      if (x[j] > x[j + 1]) {
        const temp = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
      }
    }
  }
  return x;
}
console.log(bublesort(x));

function selectionsort(x){
    for(let i=1; i<x.length;i++){
        let min = i;
        for(let j=i+1; j<x.length; j++){
            if(x[j]< x[min])
              min = j;
        }
    }
    if(min !== j){
        const temp = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
    }
    return x;
}
console.log(selectionsort(x))
