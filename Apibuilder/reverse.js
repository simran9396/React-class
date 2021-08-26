const reverse=(str)=>{
    let getreverse=""
    for (const char of str) {
        getreverse=char+getreverse
        
    }
    return getreverse
}
console.log(reverse("simran"))


const neww=(str)=>{
    let arrse=""
    for (const char of str){
        arrse=arrse+" " +char
    }
    return arrse
}
console.log(neww(["a","b","c"]))

const arr=["a","b","c"]
console.log(arr.join(""))
// --------------------------------------

const arr1=["a","b","c"]
let tst =""
arr1.forEach(element => {
    tst+=element
    
});
console.log(tst)
// --------------------------------
const arr2=["a","b","c"]


console.log(arr2.reduce((a,b) =>a+b))
// for reverse we can do b-a it will give cba reduce get 2 value 1 is accumulator



