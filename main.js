const A1 = document.getElementById('A1')
const A2 = document.getElementById('A2')
const A3 = document.getElementById('A3')
const A4 = document.getElementById('A4')
const A5 = document.getElementById('A5')
const A6 = document.getElementById('A6')
const A7 = document.getElementById('A7')
const A8 = document.getElementById('A8')
const A9 = document.getElementById('A9')
const A10 = document.getElementById('A10')
const B1 = document.getElementById('B1')
const B2 = document.getElementById('B2')
const B3 = document.getElementById('B3')
const B4 = document.getElementById('B4')
const B5 = document.getElementById('B5')
const B6 = document.getElementById('B6')
const B7 = document.getElementById('B7')
const B8 = document.getElementById('B8')
const B9 = document.getElementById('B9')
const B10 = document.getElementById('B10')
const C1 = document.getElementById('C1')
const C2 = document.getElementById('C2')
const C3 = document.getElementById('C3')
const C4 = document.getElementById('C4')
const C5 = document.getElementById('C5')
const C6 = document.getElementById('C6')
const C7 = document.getElementById('C7')
const C8 = document.getElementById('C8')
const C9 = document.getElementById('C9')
const C10 = document.getElementById('C10')
const grid = document.querySelector('.grid')

var ll1 = Math.floor(Math.random() * 3 + 1)
if (ll1 === 1) {
  ll1 = 'A'
}
if (ll1 === 2) {
  ll1 = 'B'
}
if (ll1 === 3) {
  ll1 = 'C'
}

const nn1 = Math.floor(Math.random() * 10 + 1)

var ll2 = Math.floor(Math.random() * 3 + 1)
if (ll2 === 1) {
  ll2 = 'A'
}
if (ll2 === 2) {
  ll2 = 'B'
}
if (ll2 === 3) {
  ll2 = 'C'
}

const nn2 = Math.floor(Math.random() * 10 + 1)

var bomb2 = ll2 + nn2

var bomb1 = ll1 + nn1

if (bomb1 === 'A1') {
  A1.innerHTML = 'Bomba'
}
if (bomb1 === 'A2') {
  A2.innerHTML = 'Bomba'
}
if (bomb1 === 'A3') {
  A3.innerHTML = 'Bomba'
}
if (bomb1 === 'A4') {
  A4.innerHTML = 'Bomba'
}
if (bomb1 === 'A5') {
  A5.innerHTML = 'Bomba'
}
if (bomb1 === 'A6') {
  A6.innerHTML = 'Bomba'
}
if (bomb1 === 'A7') {
  A7.innerHTML = 'Bomba'
}
if (bomb1 === 'A8') {
  A8.innerHTML = 'Bomba'
}
if (bomb1 === 'A9') {
  A9.innerHTML = 'Bomba'
}
if (bomb1 === 'A10') {
  A10.innerHTML = 'Bomba'
}
if (bomb1 === 'B1') {
  B1.innerHTML = 'Bomba'
}
if (bomb1 === 'B2') {
  B2.innerHTML = 'Bomba'
}
if (bomb1 === 'B3') {
  B3.innerHTML = 'Bomba'
}
if (bomb1 === 'B4') {
  B4.innerHTML = 'Bomba'
}
if (bomb1 === 'B5') {
  B5.innerHTML = 'Bomba'
}
if (bomb1 === 'B6') {
  B6.innerHTML = 'Bomba'
}
if (bomb1 === 'B7') {
  B7.innerHTML = 'Bomba'
}
if (bomb1 === 'B8') {
  B8.innerHTML = 'Bomba'
}
if (bomb1 === 'B9') {
  B9.innerHTML = 'Bomba'
}
if (bomb1 === 'B10') {
  B10.innerHTML = 'Bomba'
}
if (bomb1 === 'C1') {
  C1.innerHTML = 'Bomba'
}
if (bomb1 === 'C2') {
  C2.innerHTML = 'Bomba'
}
if (bomb1 === 'C3') {
  C3.innerHTML = 'Bomba'
}
if (bomb1 === 'C4') {
  C4.innerHTML = 'Bomba'
}
if (bomb1 === 'C5') {
  C5.innerHTML = 'Bomba'
}
if (bomb1 === 'C6') {
  C6.innerHTML = 'Bomba'
}
if (bomb1 === 'C7') {
  C7.innerHTML = 'Bomba'
}
if (bomb1 === 'C8') {
  C8.innerHTML = 'Bomba'
}
if (bomb1 === 'C9') {
  C9.innerHTML = 'Bomba'
}
if (bomb1 === 'C10') {
  C10.innerHTML = 'Bomba'
}
if (bomb2 === 'A1') {
  A1.innerHTML = 'Bomba'
}
if (bomb2 === 'A2') {
  A2.innerHTML = 'Bomba'
}
if (bomb2 === 'A3') {
  A3.innerHTML = 'Bomba'
}
if (bomb2 === 'A4') {
  A4.innerHTML = 'Bomba'
}
if (bomb2 === 'A5') {
  A5.innerHTML = 'Bomba'
}
if (bomb2 === 'A6') {
  A6.innerHTML = 'Bomba'
}
if (bomb2 === 'A7') {
  A7.innerHTML = 'Bomba'
}
if (bomb2 === 'A8') {
  A8.innerHTML = 'Bomba'
}
if (bomb2 === 'A9') {
  A9.innerHTML = 'Bomba'
}
if (bomb2 === 'A10') {
  A10.innerHTML = 'Bomba'
}
if (bomb2 === 'B1') {
  B1.innerHTML = 'Bomba'
}
if (bomb2 === 'B2') {
  B2.innerHTML = 'Bomba'
}
if (bomb2 === 'B3') {
  B3.innerHTML = 'Bomba'
}
if (bomb2 === 'B4') {
  B4.innerHTML = 'Bomba'
}
if (bomb2 === 'B5') {
  B5.innerHTML = 'Bomba'
}
if (bomb2 === 'B6') {
  B6.innerHTML = 'Bomba'
}
if (bomb2 === 'B7') {
  B7.innerHTML = 'Bomba'
}
if (bomb2 === 'B8') {
  B8.innerHTML = 'Bomba'
}
if (bomb2 === 'B9') {
  B9.innerHTML = 'Bomba'
}
if (bomb2 === 'B10') {
  B10.innerHTML = 'Bomba'
}
if (bomb2 === 'C1') {
  C1.innerHTML = 'Bomba'
}
if (bomb2 === 'C2') {
  C2.innerHTML = 'Bomba'
}
if (bomb2 === 'C3') {
  C3.innerHTML = 'Bomba'
}
if (bomb2 === 'C4') {
  C4.innerHTML = 'Bomba'
}
if (bomb2 === 'C5') {
  C5.innerHTML = 'Bomba'
}
if (bomb2 === 'C6') {
  C6.innerHTML = 'Bomba'
}
if (bomb2 === 'C7') {
  C7.innerHTML = 'Bomba'
}
if (bomb2 === 'C8') {
  C8.innerHTML = 'Bomba'
}
if (bomb2 === 'C9') {
  C9.innerHTML = 'Bomba'
}
if (bomb2 === 'C10') {
  C10.innerHTML = 'Bomba'
}

A1.addEventListener('click', ap1)
function ap1() {
  A1.removeAttribute('class', 'hid')
  A1.setAttribute('class', 'block apa')
}

A2.addEventListener('click', ap2)
function ap2() {
  A2.removeAttribute('class', 'hid')
  A2.setAttribute('class', 'block apa')
}

A3.addEventListener('click', ap3)
function ap3() {
  A3.removeAttribute('class', 'hid')
  A3.setAttribute('class', 'block apa')
}

A4.addEventListener('click', ap4)
function ap4() {
  A4.removeAttribute('class', 'hid')
  A4.setAttribute('class', 'block apa')
}

A5.addEventListener('click', ap5)
function ap5() {
  A5.removeAttribute('class', 'hid')
  A5.setAttribute('class', 'block apa')
}

A6.addEventListener('click', ap6)
function ap6() {
  A6.removeAttribute('class', 'hid')
  A6.setAttribute('class', 'block apa')
}

A7.addEventListener('click', ap7)
function ap7() {
  A7.removeAttribute('class', 'hid')
  A7.setAttribute('class', 'block apa')
}

A8.addEventListener('click', ap8)
function ap8() {
  A8.removeAttribute('class', 'hid')
  A8.setAttribute('class', 'block apa')
}

A9.addEventListener('click', ap9)
function ap9() {
  A9.removeAttribute('class', 'hid')
  A9.setAttribute('class', 'block apa')
}

A10.addEventListener('click', ap10)
function ap10() {
  A10.removeAttribute('class', 'hid')
  A10.setAttribute('class', 'block apa')
}

B1.addEventListener('click', Bp1)
function Bp1() {
  B1.removeAttribute('class', 'hid')
  B1.setAttribute('class', 'block apa')
}

B2.addEventListener('click', Bp2)
function Bp2() {
  B2.removeAttribute('class', 'hid')
  B2.setAttribute('class', 'block apa')
}

B3.addEventListener('click', Bp3)
function Bp3() {
  B3.removeAttribute('class', 'hid')
  B3.setAttribute('class', 'block apa')
}

B4.addEventListener('click', Bp4)
function Bp4() {
  B4.removeAttribute('class', 'hid')
  B4.setAttribute('class', 'block apa')
}

B5.addEventListener('click', Bp5)
function Bp5() {
  B5.removeAttribute('class', 'hid')
  B5.setAttribute('class', 'block apa')
}

B6.addEventListener('click', Bp6)
function Bp6() {
  B6.removeAttribute('class', 'hid')
  B6.setAttribute('class', 'block apa')
}

B7.addEventListener('click', Bp7)
function Bp7() {
  B7.removeAttribute('class', 'hid')
  B7.setAttribute('class', 'block apa')
}

B8.addEventListener('click', Bp8)
function Bp8() {
  B8.removeAttribute('class', 'hid')
  B8.setAttribute('class', 'block apa')
}

B9.addEventListener('click', Bp9)
function Bp9() {
  B9.removeAttribute('class', 'hid')
  B9.setAttribute('class', 'block apa')
}

B10.addEventListener('click', Bp10)
function Bp10() {
  B10.removeAttribute('class', 'hid')
  B10.setAttribute('class', 'block apa')
}

C1.addEventListener('click', Cp1)
function Cp1() {
  C1.removeAttribute('class', 'hid')
  C1.setAttribute('class', 'block apa')
}

C2.addEventListener('click', Cp2)
function Cp2() {
  C2.removeAttribute('class', 'hid')
  C2.setAttribute('class', 'block apa')
}

C3.addEventListener('click', Cp3)
function Cp3() {
  C3.removeAttribute('class', 'hid')
  C3.setAttribute('class', 'block apa')
}

C4.addEventListener('click', Cp4)
function Cp4() {
  C4.removeAttribute('class', 'hid')
  C4.setAttribute('class', 'block apa')
}

C5.addEventListener('click', Cp5)
function Cp5() {
  C5.removeAttribute('class', 'hid')
  C5.setAttribute('class', 'block apa')
}

C6.addEventListener('click', Cp6)
function Cp6() {
  C6.removeAttribute('class', 'hid')
  C6.setAttribute('class', 'block apa')
}

C7.addEventListener('click', Cp7)
function Cp7() {
  C7.removeAttribute('class', 'hid')
  C7.setAttribute('class', 'block apa')
}

C8.addEventListener('click', Cp8)
function Cp8() {
  C8.removeAttribute('class', 'hid')
  C8.setAttribute('class', 'block apa')
}

C9.addEventListener('click', Cp9)
function Cp9() {
  C9.removeAttribute('class', 'hid')
  C9.setAttribute('class', 'block apa')
}

C10.addEventListener('click', Cp10)
function Cp10() {
  C10.removeAttribute('class', 'hid')
  C10.setAttribute('class', 'block apa')
}

console.log(bomb1)
