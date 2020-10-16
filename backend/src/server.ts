import express from 'express'
const app = express()
import './database/connection'



//configurations
app.use(express.json())


app.get('/', (req, res)=>{
   return res.send({message: "hello word"})
})
//Query params: http://localhost:3001/users?search=isaac
//Route params: http://localhost:3001/users/1 - identificar um recurso
const port = 3001
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})