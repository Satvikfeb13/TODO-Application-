const express=require("express");
const connectDB=require("./config/database")
const{createtodo,updatetodo}=require("./type")
const app=express()
app.use(express.json());
app.post("/todo",async(req,res)=>{

})
app.get("/todos",async(req,res)=>{
 
    
})
app.put("/completes",async(req,res)=>{
    
})

    connectDB()
    .then(()=>{
        console.log("Database connect successfully ");
        app.listen(3000,()=>{
            console.log("server will be successfully exected on  port 3000");
        }); 
    }).catch((err)=>{
        console.log("Database can not connected ");
    })
