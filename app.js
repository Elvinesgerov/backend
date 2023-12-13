const express = require('express');
const app = express();
const a = [
    {id:1, name:"Yag", qiymet:10, miqdari:20},
    {id:2, name:"UN", qiymet:10, miqdari:30},
    {id:3, name:"Meyve", qiymet:10, miqdari:30},
    {id:4, name:"Meyve", qiymet:10, miqdari:30},
    {id:5, name:"UN", qiymet:10, miqdari:30},
    {id:6, name:"UN", qiymet:10, miqdari:30},
    {id:7, name:"UN", qiymet:10, miqdari:30},
    {id:8, name:"UN", qiymet:10, miqdari:30},
    {id:9, name:"UN", qiymet:10, miqdari:30},
    {id:10, name:"UN", qiymet:10, miqdari:30},
]

app.get('/a', (req,res)=>{
   
    res.send(a)
})

app.get('/a/:id', (req,res)=>{
    const userID = req.params.id;
    const selectedUser = a.find(item=>item.id == userID)
    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('istifadeci yoxdur')
    }
})

app.listen(4000, ()=>{
    console.log("server quruldu");
})