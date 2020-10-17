import app from './app'
import './database/connection'




//Query params: http://localhost:3001/users?search=isaac
//Route params: http://localhost:3001/users/1 - identificar um recurso
const port = 3001
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})