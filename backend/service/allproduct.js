const router = require('express').Router();

const q = require('../databases/db.connction');



router.get('/getproduct',(req,res)=>{
    q.execute(`SELECT * from product`,(err,result)=>{

        res.json({message:"success",product:result});
    })
})

module.exports = router;