let obj = {
  num: 1,
  number: 2,
  nam3: 3,
  obj2: {
    a: 2,
    s: 5,
    obj3: {
      a: 5,
      s: 55,
    },
  },
};

function revers(obj) {
  let arr = Object.entries(obj).map((el) => {
    if (typeof el[1] == "object") {
      return [el[0], revers(el[1])];
    } else {
      return el.reverse();
    }
  });

  return Object.fromEntries(arr);
}

console.log(revers(obj));

///////////////////////////////////////////////////////////////////////
// const array = [1,[2,3,[4]],[[5,6],7]];
// let flatArray = [];
// function flat(arr){

//     arr.map(el => {

//         if(!Array.isArray(el)){

//          flatArray.push(el)

//         } else{

//             flat(el)
//         }
//     })

// }
//  flat(array)

//  //map
//  function map(arr, cb){
//     let newArr = [];
//     for(let i = 0; i< arr.length; i++){
//        newArr.push(cb(arr[i], i, arr))
//     }
//     return newArr

//  }
// let result = map([2,3], (el)=>{return(el)})

// //slice
// function slice(arr, start = 0, end = arr.length-1, ...rest){
//     let newSliceArr = [];

//    if(end < 0 ){
//        end = arr.length+end
// }
// if( start < 0 && start <end){
//     start=arr.length+start
// }

//     for(let i = start ; i<end; i++){
//         newSliceArr.push(arr[i])
//       }

//       newSliceArr = [...newSliceArr, ...rest]

// return newSliceArr
//  }

//  let resultSlice = slice([5,6,4,5,55,2,54,5441,4,5,55,2,54,5441], 2,-5);
// console.log(resultSlice);

// let a =[5,6,4,5,55,2,54,5441,4,5,55,2,54,5441]
// let b = a.slice(-2,5)

// console.log("b", b);
