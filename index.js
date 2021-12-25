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
    for(let i = 0; i< arr.length; i++){
        cb(arr[i], i, arr)
    }  
    
 }


map([2,3], (el)=>{console.log(el)})