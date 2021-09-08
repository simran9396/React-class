// const cube=[20]
// console.log(cube.reduce((accu,num)=>accu+num**3,0))
// // 0 is initialized value 



// // ================================
// // addition of only numbers 
// const arr=[null,2,3,5,"cat",{num:25},undefined,2]
// const newArr=arr.filter((item)=>typeof item ==="number"&&item).reduce((acc,num)=>acc+num)

// console.log(newArr)
const array=[1, 2, 4, 2, 5,];
const newArr=[];
array.forEach((element, index) => {
    array.indexOf(element)==index && newArr.push(element)
});
console.log(newArr);