const express=require('express');
const app=express();
require('dotenv').config();

const PORT=process.env.PORT || 4000;

app.get('/',(req,res)=>{
    return res.json({message: "hi,i am inside a node js application container"})
});

app.listen(PORT,()=>console.log(`Server started on PORT:${PORT}`));