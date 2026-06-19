const express=require("express");
const app=express();
app.get("/",(req,res)=>res.send("Jhumvi API"));
app.listen(5000);
