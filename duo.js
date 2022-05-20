const rijksoverheidYoink =
  `
24 januari
24 februari
24 maart
22 april
24 mei
24 juni
22 juli
24 augustus
23 september
24 oktober
24 november
22 december`.split("\n")
const data = rijksoverheidYoink.map(x => +x.split(" ")[0])


function getDaysInMonth(month) {
  return new Date(new Date().getFullYear(), month, 0).getDate()
}

function duoDag() {
  const elem = document.getElementById('result')


  const d = new Date()
  const currentDay = d.getDate()

  // Zero based indexing
  const currentMonth = d.getMonth() + 1

  let duoDag = data[currentMonth]

  if (currentDay == duoDag) {
    confetti.start()
    elem.innerText = "VANDAAAGGG!!!"
    return
  }

  let duration;
  if (currentDay > duoDag) {
    duoDag = data[(currentMonth + 1) % 12]
    duration = duoDag + (getDaysInMonth(currentMonth) - currentDay);
    currentMonth = (currentMonth + 1) % 12
  } else {
    duration = duoDag - currentDay
  }

  elem.innerText = `DUO geld komt over ${duration} dagen! (${rijksoverheidYoink[currentMonth]})`
}
duoDag()
