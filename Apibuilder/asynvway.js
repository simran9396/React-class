
// -------------------------------Promises--------------------


const async =()=>{

    setTimeout(()=>{
        console.log("first call")

    }, 5000)
    
    console.log("second call")
}
async()