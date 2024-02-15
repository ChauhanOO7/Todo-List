const express=require("express");
const path=require("path");
const favicon=require("serve-favicon");
const app=express();
const port=process.env.PORT || 8001;
const database_url=process.env.dURL || "mongodb://127.0.0.1:27017/userdatabase";
const views_path=path.join(__dirname,"views");
const static_path=path.join(__dirname,"static");
const mongoose=require("mongoose");
const cookieParser = require('cookie-parser');

//routes
const staticroutes=require("./routes/staticroute");
const loginroute=require("./routes/login");
const signuproute=require("./routes/signup");
const {checkloggedin}=require("./middleware/loggedin");

//database connectivity

mongoose.connect(database_url).then(()=>{
    console.log("database is connected...");
}).catch((error)=>{
    logError(error);
});

//middlewares
app.use(favicon(path.join(__dirname,'static','images','icon.ico')));
app.set("view engine","pug");
app.set("views",views_path);
app.use("/static",express.static(static_path));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

//routing
app.use("/",staticroutes);
app.use("/login",loginroute);
app.use("/signup",signuproute);


app.listen(port,()=>{
    console.log("server is connected...");
});
