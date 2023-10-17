const {connection} = require("../../db/db_config");
const createEventService = (
    product_id,product_name,category,price,stock_quantity,callback
) => {
    connection.query(`INSERT INTO products1 VALUES ("${product_id}", "${product_name}", "${category}", "${price}", "${stock_quantity}")`, (err,result)=>{
        if(err){
            callback(err,null);
        }else{
            callback(null, result);
        }
    });
};
module.exports = { createEventService }