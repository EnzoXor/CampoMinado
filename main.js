function field(cols_cont, rows_cont, mines) {
  var colum = 8
  for (var i = 0; i < colum; i++) {
    const tr = document.createElement('tr')
    const f = document.querySelector('#field')
    f.append(tr)
    var h = i + 1
    function np() {
      if ((nn1 == 1) & (h == 1)) {
        nn1 = 'A'
        h = 'A'
      }
      if ((nn1 == 2) & (h == 2)) {
        nn1 = 'B'
        h = 'B'
      }
      if ((nn1 == 3) & (h == 3)) {
        nn1 = 'C'
        h = 'C'
      }
      if ((nn1 == 4) & (h == 4)) {
        nn1 = 'D'
        h = 'D'
      }
      if ((nn1 == 5) & (h == 5)) {
        nn1 = 'E'
        h = 'E'
      }
      if ((nn1 == 6) & (h == 6)) {
        nn1 = 'F'
        h = 'F'
      }
      if ((nn1 == 7) & (h == 7)) {
        nn1 = 'G'
        h = 'G'
      }
      if ((nn1 == 8) & (h == 8)) {
        nn1 = 'H'
        h = 'H'
      }
    }
    function nc() {
      if (nn2 == 1) {
        nn2 = 'A'
      }
      if (nn2 == 2) {
        nn2 = 'B'
      }
      if (nn2 == 3) {
        nn2 = 'C'
      }
      if (nn2 == 4) {
        nn2 = 'D'
      }
      if (nn2 == 5) {
        nn2 = 'E'
      }
      if (nn2 == 6) {
        nn2 = 'F'
      }
      if (nn2 == 7) {
        nn2 = 'G'
      }
      if (nn2 == 8) {
        nn2 = 'H'
      }
    }
    np()
    nc()
    tr.setAttribute('class', h)
    for (var j = 0; j < colum; j++) {
      const td = document.createElement('td')
      const l = document.querySelector('tr')
      tr.append(td)
      td.setAttribute('id', j + 1)
      const inp = document.createElement('input')
      td.append(inp)
      inp.setAttribute('type', 'button')
      inp.setAttribute('onclick', 'see();')
    }
  }
}
function see() {
  console.log('clicou')
}
var nn1 = Math.floor(Math.random() * 8 + 1)
var nn2 = Math.floor(Math.random() * 8 + 1)

console.log(nn1 + ' ' + nn2)

field()
