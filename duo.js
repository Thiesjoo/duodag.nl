const SUNDAY = 0
const SATURDAY = 6
const DATE_FORMATTING = {
  weekday: 'long',
  month: 'long',
}

const NOW = new Date()
// const NOW = new Date(2022, 9, 25)
console.log("We are currently living in the time:", NOW)

function getDateFor(month, day) {
  return new Date(NOW.getFullYear(), month, day, 4, 20)

}

function getDaysInMonth(month) {
  return getDateFor(month, 0).getDate()
}

/**
 * DUO doesn't deposit money in the weekends, this function grabs the overflow and
 * returns the correct day
 * @returns 22 | 23 | 24
 */
function getDuoDag(month) {
  const weekDay = getDateFor(month, 24).getDay()

  if (weekDay == SATURDAY) {
    return 23
  } else if (weekDay == SUNDAY) {
    return 22
  } else {
    return 24
  }
}

function duoDag() {
  const elem = document.getElementById('result')

  const currentDate = NOW
  const currentDay = currentDate.getDate()
  // This current month has 0 for january and 11 for december, beacuse JS is ✨special✨
  const currentMonth = currentDate.getMonth()

  // The day of duodag in this current month, so 22, 23 or 24
  const duoDag = getDuoDag(currentMonth)

  if (currentDay == duoDag) {
    confetti.start()
    elem.innerText = "VANDAAAGGG!!!"
    return
  }

  let duration = duoDag - currentDay
  let duoDagDate = getDateFor(currentMonth, duoDag)

  // Overflow for next month
  if (currentDay > duoDag) {
    duoDagDate = getDateFor((currentMonth + 1) % 12, duoDag)
    // +1 because, we have to include the end day
    duration += 1 + getDaysInMonth(currentMonth);
  }

  const [month, _, weekday] = new Intl.DateTimeFormat("nl-NL", DATE_FORMATTING).formatToParts(duoDagDate)
  duoDagString = `${weekday.value} ${duoDag} ${month.value}`
  elem.innerText = `DUO geld komt over ${duration} dag${duration > 1 ? 'en' : ""}! (${duoDagString})`
}

duoDag()
