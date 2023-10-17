const {connection} = require("../../db/db_config");
const {createEventService} = require("./product.services");

module.exports = {
    getEventsController : (req, res) => { 
        connection.query("SELECT * FROM `products1`", (err,results)=>{
            if(err){
                res.send("Error reading from DB");
            }else{
                res.json(results);
            }
        });
    },

    createEventController : (req, res) => { 
        const product_id = req.body.product_id;
        const product_name = req.body.product_name;
        const category = req.body.category;
        const price = req.body.price;
        const stock_quantity = req.body.stock_quantity;
        
    createEventService(product_id,product_name,category,price,stock_quantity,(err,result)=> {
        if(err){
            res.send("Error creating event!");
        }else{
            res.send("Event created successfully!");
        }
        });
    },
};    