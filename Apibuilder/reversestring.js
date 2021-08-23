console.log("How Are You".split(" ").reverse().join(" "))
console.log("simran pathan".split("").reverse().join(""))



// ---------------------------
const revstr=(str)=>{
    const arrstr=str.split(" ")
    const newarr=[]
    for (i=arrstr.length-1; i>=0; i--){
        newarr.push(arrstr[i])
    }
    return newarr.join(" ")
}
console.log(revstr("i am fine"))



console.log("my name is simran".split(" ").reverse().join(" "))



const practice=(str)=>{
    const arrstr=str.split(" ")
    newarr=[]
    for(i=arrstr.length-1;i>=0;i--){
        newarr.push(arrstr[i])
    }
    return newarr.join(" ")
}
console.log(practice("my practice work"))





const practiceagain=(str)=>{
    const arrstr=str.split(" ")
    const newarr=[]
    for(i=arrstr.length-1;i>=0;i--){
        newarr.push(arrstr[i])
    }
    return newarr.join(" ")
}
console.log(practiceagain("how are you now"))