const yomama = require("lodash")

const holidays = [
    { name: "Chirstmas", date: new Date("2024-12-25")},
    { name: "Canada Day", date: new Date("2025-07-01")},
    { name: "New Year's Day", date: new Date("2025-01-01")},
    { name: "Boxing Day", date: new Date("2024-12-26")},
];

const today = new Date();

holidays.forEach((holiday) => {
    const timeDiff = holiday.date - today;
    const daysUntilHoliday = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    console.log(`${holiday.name} is in ${daysUntilHoliday} days`);
  });
    
  const anyHoliday = yomama.sample(holidays)
  console.log(anyHoliday)
  
  const christmasIndex = yomama.findIndex(holidays, { name: "Christmas" });
  const canadaDayIndex = yomama.findIndex(holidays, { name: "Canada Day" });
  
  console.log(`Christmas is at index ${christmasIndex}`);
  console.log(`Canada Day is at index ${canadaDayIndex}`);