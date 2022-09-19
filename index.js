const express =  require('express');
const app = express();

app.get("/", (requ, res, next) =>{
    res.status(200);
    res.send("Hola Mundo");
});

app.listen(3000, ()=>{
    console.log("server is running...");
});