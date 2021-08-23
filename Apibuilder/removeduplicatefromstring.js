const removeduplicate=(str)=>{
    const arrstr=str.split(" ")
    const uniquearr=[...new Set(arrstr)]
    return uniquearr.join(" ")
}
console.log(removeduplicate("i am good. i am  fine i am"))



// ---------------------------
const remove=(str)=>{
    const arrstr=str.split(" ")
    const uniquearr=[...new Set(arrstr)]
    return uniquearr.join(" ")
}
console.log(remove("i am I AM i am i i"))



const removepractice=(str)=>{
    const newarr=str.split(" ")
    const unique=[...new Set(newarr)]
    return unique.join("  ")
}
console.log(removepractice(" sim is sim i am din sim"))