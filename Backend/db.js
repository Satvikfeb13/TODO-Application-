const mongoose=require("mongoose");
const todoSchema=mongoose.schema({
    title: String,
    description:String,
    complete:Boolean,

})
const todo = mongoose.model("Todo",todoSchema)
module.exports= {todo}