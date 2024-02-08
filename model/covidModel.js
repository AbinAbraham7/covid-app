const mongoose=require("mongoose")

const covidchema=new mongoose.Schema(

    {
        patientname:String,
        phone:String,
        address:String,
        symptoms:String,
        status:String
    }
)
module.exports=mongoose.model("covid",covidchema)