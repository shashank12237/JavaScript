/*
We can use an array as a deque with the following operations:

push(...items) adds items to the end.
pop() removes the element from the end and returns it.
shift() removes the element from the beginning and returns it.
unshift(...items) adds items to the beginning.
To loop over the elements of the array:

for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
for (let item of arr) – the modern syntax for items only,
for (let i in arr) – never use.
*/
//splice==> removes elements from particular index
//<array name>.splice(2)==>removes all elements frm index 2
//<array name>.splice(index,how many elemts to remove aftr index )
//eg splice(2,3)==> removes 3 indexs from index 2
let arr= new Array(1,2,3,4,5,6,7);
console.log(arr) ; //  [1, 2, 3, 4,5, 6, 7] 
arr.splice(5);//removes all elements from index 5
console.log(arr);//[ 1, 2, 3, 4, 5 ]
arr.splice(3,1);//element at index 3 is removed 
console.log(arr);//[ 1, 2, 3, 5 ]
/*
(method) Array<any>.splice(start: number, deleteCount?: number | undefined): any[] (+1 overload)
Removes elements from an array and, if necessary, 
inserts new elements in their place, 
returning the deleted elements.
*/
