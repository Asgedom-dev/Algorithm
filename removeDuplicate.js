let x = [1, 1, 2, 4, 4, 5,5, 6];
// console.log(x.length);
let newList = [];
function removeDup(x) {
  for (let i = 0; i < x.length; i++) {
    
      for(let j=i+1;j <=x.length; j++){
          if(x[i]===x[j]){
            
            break;
          }newList.push(x[i]);  break;
      } 
    // if (!newList.includes(x[i])) {
    //   newList.push(x[i]);
    // }
  }
  return newList;
}
console.log(removeDup(x));
