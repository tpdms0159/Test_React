const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tpdms0159:obdEchGfAD0t3l9C@cluster0.iyodwfl.mongodb.net/').
then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello node!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}
)