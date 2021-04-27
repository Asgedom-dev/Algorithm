let x = [1,2,3,4,5,6,7];
let item = 3;
function binary(x , item){
    let up = 0;
    let lo =x[x.length-1];

    while(lo<=up){
        mid = (lo + up)/2;
        let guess = item[mid];
        if(guess == item){
            return mid;
        }if(guess >= item){
            up = mid-1;
        }else{
            lo = mid + 1;
        }
    return null;
    }
}
console.log(binary(x, item));