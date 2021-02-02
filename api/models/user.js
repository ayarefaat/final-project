const mongoose =require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
//autoIncrement
let connection = mongoose.createConnection("mongodb://localhost/airbnb",{useUnifiedTopology: true,useNewUrlParser: true});
autoIncrement.initialize(connection);

let userSchema=new mongoose.Schema({
    userID:{
        type:Number
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:[emailValidator ,'incorrect email formate']
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
        validate:[numberValidator,'incorrect phone number']
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
    ,
    userImage:{
        type:String,
    }
});
userSchema.plugin(autoIncrement.plugin,{
    model:'User',
    field:'userID',
    startAt:0,
    incrementBy:1
});
function emailValidator(value){
    return /\S+@\S+\.\S+/.test(value)
}
function numberValidator(number){
    return /^\d([- ]*\d){11,12}$/.test(number)
}
module.exports=mongoose.model('User', userSchema)