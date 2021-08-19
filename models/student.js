const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    pass:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports = mongoose.model('Student',studentSchema)