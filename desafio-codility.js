const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Example -> Input 'Sat' with 23 calendar days return 'Mon'

const getDayOfWeekByCalendarDays = (dayOfWeek, calendarDays) => {
  if (calendarDays < 0 || calendarDays > 500) {
    return 'Invalid calendar days';
  }

  let indexDayOfWeek = daysOfWeek.indexOf(dayOfWeek);

  for (let index = 0; index <= calendarDays; index++) {
    if (indexDayOfWeek === daysOfWeek.length) {
      indexDayOfWeek = 0
    }

    if (index === calendarDays) {
      return daysOfWeek[indexDayOfWeek]
    }

    indexDayOfWeek++
  }
}

console.log(getDayOfWeekByCalendarDays('Sat', 23));
console.log(getDayOfWeekByCalendarDays('Mon', 2));