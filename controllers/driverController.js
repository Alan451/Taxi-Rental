const driverModel = require('../models/driver')

// console.log(Driver)

const driverController = {
    all(req,res){
        return driverModel.find({})
        .exec(
            function(err,result){
                if(err){
                    console.log( err);
                    res.end();
                }
                else{
                    res.status(200).json(result);
                }
            }
        ) 
    },
    getOne(req,res){
        return driverModel.findById({_id:req.params.id})
        .exec(
            (err,result)=>{
                if(err){
                    console.log( err);
                    res.end();
                }
                else{
                    res.status(200).json(result);
                }
            }
        )
    },
    deleteDriver(req,res){
        return driverModel.findByIdAndDelete({_id:req.params.id})
        .exec(
            (err,result)=>{
                if(err){
                    console.log( err);
                    res.end();
                }
                else{
                    res.status(200).end();
                }
            }
        )
    },
    createDriver(req,res){
        const driver = new driverModel(req.body);
        return driver.save(
            (err,result) =>{
                if (err){
                    console.log( err);
                    res.end();
                }
                else{
                    res.status(204).end();
                }
            }
        );
        
        
    },
    updateDriver(req,res){
        return driverModel.findByIdAndUpdate(req.params.id,req.body).exec(
            (err,result) =>{
                if (err){
                    console.log( err);
                    res.end();
                }
                else{
                    res.status(200).end();
                }
            }
        );
       
    }
}

module.exports = driverController