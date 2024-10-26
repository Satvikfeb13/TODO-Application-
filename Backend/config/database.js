const mongoose=require("mongoose");
const connectDB=async()=>{
    mongoose.connect(
        "mongodb+srv://patilsatvik1324:VZufQqhkL0YxKgiC@todo.ifvnb.mongodb.net/"
    )
}
module.exports= connectDB