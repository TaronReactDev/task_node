const array = [1,[2,3,[4]],[[5,6],7]];
let flatArray = [];
function flat(arr){
   
    arr.map(el => {

        if(!Array.isArray(el)){

         flatArray.push(el)

        } else{

            flat(el)
        }
    })
  
}
 flat(array)




 //map
 function map(arr, cb){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
       newArr.push(cb(arr[i], i, arr)) 
    }  
    return newArr
    
 }
let result = map([2,3], (el)=>{return(el)})


//slice
function slice(arr, start = 0, end = arr.length-1, ...rest){
    let newSliceArr = [];

   if(end < 0 ){
       end = arr.length+end
} 
if( start < 0 && start <end){
    start=arr.length+start
}



    for(let i = start ; i<end; i++){
        newSliceArr.push(arr[i])
      }
   
      newSliceArr = [...newSliceArr, ...rest]

return newSliceArr
 }


 let resultSlice = slice([5,6,4,5,55,2,54,5441,4,5,55,2,54,5441], 2,5, 11,11);

