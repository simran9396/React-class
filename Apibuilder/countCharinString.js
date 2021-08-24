const stringchar=(str)=>{
    const arrstr=str.split("   ")
    const newobj={}
        arrstr.forEach(element => {
            newobj[element]===undefined ?newobj[element]=1 :newobj[element]++
            
        });


    return newobj
}
console.log(stringchar("mine success is deprnd on your success"))