function field(cols_cont, rows_cont, mines) {
  var colum = 8
  for (var i = 0; i < colum; i++) {
    const tr = document.createElement('tr')
    const f = document.querySelector('#field')
    f.append(tr)

    tr.setAttribute('id', i + 1)
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
  const nn1 = Math.floor(Math.random() * colum + 1)
  const nn2 = Math.floor(Math.random() * colum + 1)
  console.log(nn1 + ' ' + nn2)
}
function see() {
  console.log('clicou')
}

field()
