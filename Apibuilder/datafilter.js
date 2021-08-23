const arr=[54,"dim",5,"sim",85,{}]
const arr2=[]
arr.forEach(element => {
    if(typeof(element)==="string"){
        arr2.push(element.toUpperCase())
    }
    
});
console.log(arr2)