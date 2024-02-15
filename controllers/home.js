const {tasks}=require("../models/tasks");
const {getUser}=require("../services/mapping");

async function backtohome(req,res)
{
    const Uid=req.cookies?.uid;
    const User=getUser(Uid);
    if(User)
    {
        const user_tasks=await tasks.find({createdby:User._id});
        return res.render("home",{check:2,added:user_tasks});
    }

    return res.render("home",{check:1});
}

async function edithome(req,res)
{
    const data=req.body;
    if(data.task_name!=="")
    {
        const task=await tasks({
        task:data.task_name,
        createdby:req.user._id
        });

        task.save();
    }
    
    return res.redirect(301,"/");
}

async function deletetask(req,res)
{
    const task_id=req.body.delete_task;

    await tasks.deleteOne({_id:task_id});

    return res.redirect(301,"/");
}

async function showabout(req,res)
{
    res.render("about");
}


module.exports={backtohome,edithome,deletetask,showabout};


