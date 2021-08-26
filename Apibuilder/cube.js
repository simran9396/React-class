const cube=[20]
console.log(cube.reduce((accu,num)=>accu+num**3,0))
// 0 is initialized value 



// ================================
// addition of only numbers 
const arr=[null,2,3,5,"cat",{num:25},undefined,2]
const newArr=arr.filter((item)=>typeof item ==="number"&&item).reduce((acc,num)=>acc+num)

console.log(newArr)