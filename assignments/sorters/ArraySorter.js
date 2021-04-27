class ArraySorter {
    constructor() {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
    }
    keyComparisons() {
        return this._compCount;
    }
    numSwaps() {
        return this._swapCount;
    }
    numShifts() {
        return this._shiftCount;
    }
    print(arr) {
        let last = arr.length - 1;
        let res = "[";
        for (let i=0; i<=last; i++) {
            res = res + arr[i];
            if (i<last) {
                res = res + ", ";
            }
        }
        console.log(res + "]");
    }
    _swapElements(arr, j, k) {
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        this._swapCount++;
    }

    insertSort(arr){
        this._insertSort(arr, 0, arr.length-1); 
    }

    _insertSort(arr, lower, upper){
        let n = arr.length;
        let temp = 0;
        let j = 0;
        for(let i = lower + 1 ; i <= upper; i++){
             temp = arr[i];
             j = i;
             //while loop finds the insertion point for temp (element to be inserted)
             this._compCount++;
             while(j >= lower+1 && temp < arr[j-1]){
                 arr[j] = arr[j-1];
                 j--;
                 this._shiftCount++;
                 this._compCount++;
             }   
             arr[j] = temp;
        }
        return arr;
     }

     bubleSort(arr){
         this._compCount = 0;
         this._shiftCount = 0;
         this._shiftCount = 0;
         this._bubleSort(arr,0,arr.length-1);
     }
     _bubleSort(arr, lo, hi){
         let n = hi - lo + 1;
         for(let i=0; i< n; i++){
             for(let j=0; j<n-1; j++){
                 this._compCount++;
                 if(arr[j] > arr[j+1])
                 this._swapElements(arr, j, j+1);
             }
         }
     }

     selectionSort(arr){
         this._compCount = 0;
         this._shiftCount = 0;
         this._swapCount = 0;
         this._swapElements(arr, 0, arr.length-1);
     }
     _selectionSort(arr, lo, hi){
     let n = hi - lo + 1;
     for(let i = 0; i< n; i++){
         let minimumPos = this._minimumPos(arr, i, n-1);
         this._swapElements(arr, i, minimumPos);
     }
    }
    _minimumPos(arr, lo, hi){
        let min = arr[lo];
        let index = lo;
        for(let i= lo + 1; i<=hi; i++){
            this._compCount++;
            if(arr[i] < min){
                min = arr[i];
                index = i;
            }
        }
    }

}

exports.ArraySorter = ArraySorter;
