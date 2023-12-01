const router = require('express').Router();

const q = require('../databases/db.connction');

router.delete('/delete',(req,res)=>{
    const {id} = req.body
    q.execute(`Delete from product where id='${id};'`)
    res.json({message:'sucsess'});
})

module.exports = router;