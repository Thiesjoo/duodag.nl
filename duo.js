const SUNDAY = 0
const SATURDAY = 6

function getDateFor(month, day) {
  return new Date(new Date().getFullYear(), month, day)

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

  const d = new Date()
  const currentDay = d.getDate()
  // Zero based indexing
  const currentMonth = d.getMonth()

  let duoDag = getDuoDag(currentMonth)

  if (currentDay == duoDag) {
    confetti.start()
    elem.innerText = "VANDAAAGGG!!!"
    return
  }

  let duration;
  let duoDagString;
  if (currentDay > duoDag) {
    duoDagString = `${duoDag} ${getDateFor((currentMonth + 1) % 12, 3).toLocaleString('nl-NL', { month: 'long' })}`
    // +1 because, we have to include the end day
    duration = duoDag + 1 + (getDaysInMonth(currentMonth) - currentDay);
  } else {
    duoDagString = `${duoDag} ${d.toLocaleString('nl-NL', { month: 'long' })}`
    duration = duoDag - currentDay
  }

  elem.innerText = `DUO geld komt over ${duration} dag${duration > 1 ? 'en' : ""
    }! (${duoDagString})`
}

duoDag()
