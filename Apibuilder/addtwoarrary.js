const addtwoarray=(arr1,arr2)=>arr1.map((item,index)=>item +arr2[index])

console.log(addtwoarray([1,2,3,4],[8,5,5,7]))




// --------------------------c
const addtwoArray=(arr1,arr2)=>{
    const newArr=[]
    arr1.forEach((element,index)=>{
        newArr.push(element+arr2[index])
    })
    return newArr
}
console.log(addtwoArray([8,2,3,4],[8,5,8,7]))