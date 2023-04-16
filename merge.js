//  Implement a merge sort function that takes 
//  an array of integers as input, and returns the
//  sorted array.
function mergeSort(arr) {
    
  if (arr.length <= 1) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middleIndex);
  let rightArr = arr.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
   let result = [];

   while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  return [...result,...leftArr,...rightArr]
}
let arr= [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log(mergeSort(arr));

//  Write a function called mergeSort that
//  takes an array of integers as its parameter and returns a 
// new sorted array using the Merge Sort algorithm.
function mergeSort2(arr1){
     if (arr1.length <=1){
        return arr1    
     }
    
    let middle = Math.floor(arr1.length /2);
    let left = arr1.slice(0,middle)
    let right = arr1.slice(middle)
    return sort(mergeSort2(left),mergeSort2(right))

}

function sort(left,right){
    let empty=[];
    while(left.length && right.length){

    
    if (left[0] < right[0]) {
        empty.push(left.shift());
        
    }
    else{
        empty.push(right.shift());

    }
   

     }
     return [...empty,...left,...right]
}
let arr1 = [10,5,30,55,12,79]
console.log(mergeSort2(arr1));