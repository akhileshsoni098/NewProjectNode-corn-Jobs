const express = require("express")
const cron = require('node-cron');
const moment = require('moment');

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




// const events = [
//   {
//     text: 'textOne',
//     dateTime: '2020-07-10 15:00:00.000'
//   },
//   {
//     text: 'textTwo',
//     dateTime: '2020-07-15 14:00:00.000'
//   },
//   {
//     text: 'textFinal',
//     dateTime: '2020-07-15 15:00:00.000'
//   }
// ];

// const triggerFunction = async (text) => {
//   await new Promise(resolve => setTimeout(resolve, text.length * 1000));
//   console.log(text.split('').reverse().join(''));
// };

// events.forEach(event => {
//   const dateTime = moment(event.dateTime).toDate();
//   const task = cron.schedule(dateTime, () => {
//     triggerFunction(event.text);

//   });
// });

// console.log(events);



// let  schedule1 = async (req,res) => {

//     try {
//         var d = new Date();
//         var min = d.getMinutes();
//         var date = d.getDate();
//         var month = d.getMonth();
//         var hour = d.getHours();
//         var sec = d.getSeconds()

// let arr = [
//   {
//                   text: "textOne",
//                   dateTime: "2020-07-10 15:00:00.000"
// },
// {

//                   text: "textTwo",
//                   dateTime: "2020-07-15 14:00:00.000"
// },
// {
//                   text: "textFinal",
//                   dateTime: "2020-07-15 15:00:00.000"
// }
// ]





//        for(let i=0; i<=arr.length; i=i++){



        
//         cron.schedule(`*/2 * * * * *`,() => {
          

//           console.log(` ${arr[i]} task complted at ${hour} : ${min}: ${sec+i} `);
//       },
//       {
//           scheduled : true,
//           timezone : "Asia/Kolkata",
//       }
//       );
//      }

//       res.status(201).send({msg : "Job Scheduled"});

//   } catch (error) {
//       res.status(500).send(error);
//   }
// }

// schedule1();


const events = [
    {
                    text: "textOne",
                    dateTime: "2020-07-10 15:00:00.000"
  },
  {
  
                    text: "textTwo",
                    dateTime: "2020-07-15 14:00:00.000"
  },
  {
                    text: "textFinal",
                    dateTime: "2020-07-15 15:00:00.000"
  }
  ];
  
  
var scheduleTime = moment(events.dateTime);
var month = scheduleTime.month() + 1;
var cronExpression = `${scheduleTime.second()} ${scheduleTime.minute()} ${scheduleTime.hour()} ${scheduleTime.date()} ${month - 1}`;

async function triggerFunction(text) {
  console.log(`Triggered: ${text}`);
  const sleepDuration = text.length * 4000;
  console.log(`Sleeping for ${sleepDuration}ms...`);
  await new Promise(resolve => setTimeout(resolve, sleepDuration));
  // console.log(`${text.split("").reverse().join("")}`);
}

// Schedule events

for (let event of events) {
  const scheduleTime = moment(event.dateTime).format(`${cronExpression}`);
  cron.schedule(scheduleTime, () => {
    triggerFunction(event.text);
  });
  console.log(`Scheduled: ${event.text} at ${event.dateTime}`);
} 