const category = require("../models/CategoryModel");

const addcategory = async(req,res) => {
    const {name} = req.body;
    const cat = await category.create({
        name:name
    });
    return res.status(200).send({
        success : true,
        message : "Category created successfully",
        cat
    })
}
const viewcategory = async(req,res) =>{
    try{
        let cat = await category.find({});
        return res.status(200).send({
            success : true,
            message : "Category fetch successfully",
            cat
        })
    }catch(err){
        return res.status(500).send({
            success : false,
            message : err
        })
    }
}
module.exports = {
    addcategory,viewcategory
}