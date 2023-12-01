const router = require('express').Router();
const q = require('../databases/db.connction');

router.post('/addproduct',(req,res)=>{
    const {name,price,description} = req.body;
    q.execute(`INSERT INTO product (name,price,description) VALUES ('
    ${name}',
    '${price}',
    '${description}')`);

    res.json({message:'sucsess'});
})

module.exports = router;