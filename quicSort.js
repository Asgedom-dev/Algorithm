let arr4 = [3,4,6,7,0,3];
console.log(quickSort(arr4));

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    //step1
    let n = arr.length;
    let p = pickPivote(n);//p is the position of the positiion
    //step 2
    let {L, R, G} = partition(arr, p);
    //step 3
    L = quickSort(L);
    G = quickSort(G);
    //step 4
    arr = merge(merge(L, E), G); // you dont have to use merge sort in reality
    return arr;
}
function partition(arr, p){
    let L = [];
    let E = [];
    let G = [];
    let x = arr[p];
    for(let i=0; i< arr.length; i++){
        if(arr[i] < x){
            L.push(arr[i]);
        }else if(arr[i] == x){
            E.push(arr[i])
        }else{
            G.push(arr[i])
        }
    }
    return {L,E,G};
}
function pickPivote(n){
    Math.floor(Math.random () * n);
}
//running time = : O(n) = (n)

function merge(arr1, arr2){
    let arr = [];// length of arr: n1 + n2
    let
}