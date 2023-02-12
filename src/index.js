
const cron = require('node-cron');
const events = [
  { text: "textOne", dateTime: "5 44 21 11 2 6" },// sec +min +hour +day of the month +month+week of the day// week of the day 1-6 =>7=0=sunday
  { text: "textTwo", dateTime: "10 51 22 12 2 0" },
  { text: "textThree", dateTime: "30 15 23 13 2 1" },
  { text: "textFour", dateTime: "30 15 23 14 2 2" },
  { text: "textFive", dateTime: "30 15 23 15 2 3" },
  { text: "textSix", dateTime: "30 15 23 16 2 4" },
  { text: "textSeven", dateTime: "30 15 23 17 2 5" },
  { text: "textEight", dateTime: "30 15 23 18 2 6" },
  { text: "textNine", dateTime: "30 15 23 19 2 0" },
  { text: "textTen", dateTime: "30 15 23 20 2 1" }
];


const trigger = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text.split("").reverse().join(""));
    }, 7000);
  });
};

const scheduler = function () {
  for (const event of events) {
    cron.schedule(event.dateTime, async () => {
      const result = await trigger(event.text);
      console.log(`text: ${result}`);
      let currentDate = new Date();
      let dateTime = currentDate.getFullYear() + "-"
        + (currentDate.getMonth() + 1) + "-"
        + currentDate.getDate() + " "
        + currentDate.getHours() + ":"
        + currentDate.getMinutes() + ":"
        + currentDate.getSeconds() + "."
        + currentDate.getMilliseconds();
      console.log(`dateTime: ${dateTime}`);
    });
  }
};

scheduler();
