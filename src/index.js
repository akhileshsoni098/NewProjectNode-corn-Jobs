const express = require("express")
const corn = require('node-cron')
const moment = require('moment')
const app = express()

app.use(express.json())

app.use('/', (req,res)=>{
    try{


    }catch(err){
        res.status(500).send({status:false , message:err.message})
    }
})
// schedule:true
// timezone:'Asia/Kolkata

app.listen(3000, ()=>{
    console.log("app is running on port 3000")
})

// corn.schedule('* * * * * *',()=>{
// console.log(`hii here is time scheduled `, moment().format('DD MM YYYY hh:mm:ss'))
// })

// Descriptors with their ranges:

// Seconds (optional): 0 – 59
// Minute: 0 – 59
// Hour: 0 – 23
// Day of the Month: 1 – 31
// Month: 1 – 12
// Day of the week: 0 – 7 (0 and 7 both represent Sunday)
// Examples: