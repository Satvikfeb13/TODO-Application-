const express=require("express");
const connectDB=require("./config/database")
const{createtodo,updatetodo}=require("./type")
const{todo}=require("./db")
const app=express()
app.use(express.json());
app.post("/todo",async(req,res)=>{
    const createpayload=req.body;
    const parsedpayload=createtodo.safeParse(createpayload);
    if(!parsedpayload.success){
        res.status(411).json({
            mes:"You send wrong input "
        })
        return ;
    }
    // put in todo 
 await todo.createtodo({
    title:createpayload.title,
    description:createpayload.description,
    completed:false
})
 res.json({
    msg:"todo created"
 })
})
app.get("/todos",async(req,res)=>{
 
    const todos= await todo.find({})
    res.json({
        todos
    })

})
app.put("/completes",async(req,res)=>{
    const updatepayload=req.body;
    const parsedpayload=createtodo.safeParse(updatepayload);
    if(!parsedpayload.success){
        res.status(411).json({
            mes:"You send wrong input "
        })
        return ;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        meg:"TODO marked as completed"
    })
    
    
})
app.listen(3000);
