const str=(st)=>{
    const arrstr= st.split(" ")
    console.log(arrstr)
}
const strdata=" lorem lorem loremksmkm lorem jhsj lorem"
str(strdata)
// --------------------------------------for rach loop to count lorem-------------------
const subexist=(str)=>{
    const arrstr= str.split(" ")
    let cnt=0
    arrstr.forEach((element) => {
        if (element=='lorem'){
            cnt=cnt+1
        }
        
    });
return cnt
}
const strData=" lorem lorem loremksmkm lorem njkasn lorem xdfndsjn lorem "
console.log(subexist(strData))



// ------------------------------------------optimum----------------------
const opti=(string)=>{
  
   return string.split(" ").filter((item)=>item==='lorem').length
}
const strdatas=" lorem lorem loremksmkm lorem nrere lorem jnjsh lorem jhs lorem jhu lorem "
console.log(opti(strdatas))