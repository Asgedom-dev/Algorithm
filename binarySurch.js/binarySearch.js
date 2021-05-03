let x = [1,2,3,4,5,6,7];
let item = 7;
function search(A,x){
    return binary(A,x,0,A.length-1);
}
function binary(A,x ,lower,upper){
    while(lower<upper){
        mid = Math.floor((lower + upper)/2);
        if(lower > upper ){
            return false;
        } if(x < A[mid]){
            return (A,x,lower,mid-1);
        }else{
            return (A, x, mid + 1, upper);
        }
    }
}
console.log(search(x, item));