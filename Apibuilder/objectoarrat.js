const obj={
    name:"sachin",
    city:"pune",
}
const keys=Object.keys(obj)
const newarr=keys.map(key=>obj[key])
console.log(newarr)