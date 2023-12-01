const express = require('express');

const app = express();

const cros = require('cors');
app.use(cros());
app.use(express.json());
app.use(require('./service/allproduct'));
app.use(require('./service/addproduct'));
app.use(require('./service/updateproduct'));
app.use(require('./service/deleteproduct'));

app.get('*',(req,res)=>{
    res.send('404 page Not Found');
})
// Ipconfig2020@@

app.listen(3000,()=>{

    console.log('Server Is Runing............. on port 3000');
})