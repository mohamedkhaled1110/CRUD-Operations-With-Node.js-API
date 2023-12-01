const router = require('express').Router();

const q = require('../databases/db.connction');

router.put('/update',(req,res)=>{
    const {id,name,price,description} = req.body;

    q.execute(`Update 
    product set name = '${name}',
    price = '${price}',
    description='${description}' where id = '${id}';`)
    res.json({message:"sucsess"});
})

module.exports = router;