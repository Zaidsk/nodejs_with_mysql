const {
    createPool
} = require ('mysql');

const pool = createPool({
host:"localhost",
user:"root",
password:"",
database:"test",
connectionLimit: 1
})

pool.query('select * from registration',(error, result, fields)=>{
    if(error){
        return console.log(error);
    }
    return console.log(result);

})

module.exports = pool;