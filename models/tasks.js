const mongoose=require("mongoose");

const schema=mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    createdby:{
        type:String,
        required:true
    }
});

const tasks=mongoose.model("tasks",schema);

module.exports={tasks};