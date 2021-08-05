const express =require("express")
const app = express()

app.get("/",(req,res)=>{
        res.send("simran")
        // req---request & res---response
})
app.get("/emp",(req,res)=>{
    res.json({data:['simran','simran','abc']})
})
app.get("/dept",(req,res)=>{
    res.send("i am from hr")
})

if(app.listen(4000)){  
    console.log("connected to localhost : 4000")
}































