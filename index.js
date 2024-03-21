const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://vandanaakula004:vandana8125@cluster0.qkkoigv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(
    ()=>console.log('db connected')
).catch(err=>console.error(err))

const facultySchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const UserModel = mongoose.model('Faculty', facultySchema);
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("login success")
            }
            else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("NO record existed")
        }
    })
})
app.listen(3001, ()=>{
    console.log("Server is running")
})
