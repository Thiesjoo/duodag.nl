const data = [ "januari",
                "februari",
                "maart",
                "april",
                "mei",
                "juni",
                "juli",
                "augustus",
                "september",
                "oktober",
                "november",
                "december"
]



function getDaysInMonth(month) {
  return new Date(new Date().getFullYear(), month, 0).getDate()
}

function getDuoDag() {
  const elem = document.getElementById('result')

  const d = new Date()
  const month = d.getMonth()
  const year = d.getFullYear()

  var duo = new Date(year, month, 24)

  if (duo.getDay() == 6) {
    return 23
  } else if (duo.getDay() == 0) {
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
  var currentMonth = d.getMonth()

  let duoDag = getDuoDag()

  if (currentDay == duoDag) {
    confetti.start()
    elem.innerText = "VANDAAAGGG!!!"
    return
  }

  let duration;
  if (currentDay > duoDag) {
    duoDag = getDuoDag() + ` ` + data[(currentMonth + 1) % 12]
    duration = getDuoDag() + 1 + (getDaysInMonth(currentMonth) - currentDay);
  } else {
    duoDag = getDuoDag() + ` ` + data[(currentMonth) % 12]
    duration = getDuoDag() - currentDay
  }

  elem.innerText = `DUO geld komt over ${duration} dagen! (${duoDag})`
}

duoDag()
