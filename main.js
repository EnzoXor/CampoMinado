function field(cols_cont, rows_cont, mines) {
  var colum = 8
  var rows = colum
  for (var i = 0; i < colum; i++) {
    const tr = document.createElement('tr')
    const f = document.querySelector('#field')
    f.append(tr)
    tr.className = i + 1
    for (var j = 0; j < colum; j++) {
      const td = document.createElement('td')
      const l = document.querySelector('tr')
      tr.append(td)
      td.className = i + 1
      const inp = document.createElement('input')
      td.append(inp)
      inp.setAttribute('type', 'button')
    }
  }
}
field()
