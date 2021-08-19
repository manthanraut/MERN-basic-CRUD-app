const express=require('express')
const mongoose=require('mongoose')
const app=express()

const url="mongodb://localhost/StudentsDB"

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
const con=mongoose.connection
 
con.on('open',()=>{
    console.log('connected....')
})

app.use(express.json())
const studentRouter = require('./routes/students')
app.use('/students',studentRouter)
const port=process.env.PORT || 9000
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})