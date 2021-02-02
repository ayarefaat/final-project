const express=require('express');
const app=express();
const cors= require('cors');
app.use(cors());
app.options('*', cors())
//body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//cors


const fs = require('fs');

// app.use(multer({storage:storage}).single('Photo'))
// const path=require('path')

app.use('/uploads',express.static('uploads'));
//register routes
const register= require('./routes/user/register');
app.use('/user/register',register);

//login routes
const login= require('./routes/user/login');
app.use('/user/login',login)

//auth
const auth=require('./middleware/auth');
app.use(auth)

const profile=require('./routes/user/profile')
app.use('/user/profile',auth,profile)
//require addHost
const addHost=require('./routes/host/addHost');
app.use('/host/addHost',auth,addHost)

//mongoose
const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/airbnb",{useUnifiedTopology: true,useNewUrlParser: true}).then(()=>{
    console.log("connected successfully to MongoDb")
}).catch(()=>{
    console.log("Couldn't connect to mongoDb")
});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

let files_arr=fs.readdirSync(__dirname+"/models");
files_arr.forEach((file)=>{
    require(__dirname+"/models/"+file)
});

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})