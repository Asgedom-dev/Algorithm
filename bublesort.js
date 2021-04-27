let x=[1,2,3,45,5,8,1];
let y =[12,3,4,55,22,1];

function mergeSort(x,y){
    let arr=[];
    let temp;
//    let n = arr.length;
    for(let i=0;i<x.length;i++){
        arr.push(x[i]);
    }
    for(let j=0;j<y.length;j++){
        arr.push(y[j]);
    }
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < ( arr.length-1 ); j++){
          if(arr[j] > arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
          }
        }
      }
      console.log(arr);
     }
mergeSort(x,y);