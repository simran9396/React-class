const showduplicate=(arr)=>{
     const newarr=[]
     arr.forEach((element,index) => {
         arr.indexOf(element)!==index &&newarr.push(element)
        
         
     });
     return newarr
}
console.log(showduplicate([5,5,2,7,9,45,65,21,7,87,2,9,21]) )