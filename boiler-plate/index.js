const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { User } = require('./model/User')
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tpdms0159:obdEchGfAD0t3l9C@cluster0.iyodwfl.mongodb.net/').
then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('hello the!')
})

app.post('/login/register', (req, res) => {
  const user = new User(req.body)
  console.log(user)

  user.save().then(() => {
    res.status(200).json({success:true})
}).catch((err)=>{
return res.json({success:false,err})
})
})