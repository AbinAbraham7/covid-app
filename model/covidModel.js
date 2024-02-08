const mongoose=require("mongoose")

const covidschema=new mongoose.Schema(

    {
      patientName:String,
      phone:String,
      address:String,
      symptoms:String,
      status:String

       
    }
)
module.exports=mongoose.model("covid",covidschema)