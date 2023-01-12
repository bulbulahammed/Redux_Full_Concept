const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')



app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products',function(req,res){
    res.sendFile(__dirname + '/products.json')  

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})