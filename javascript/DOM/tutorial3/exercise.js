// Element Generator
const g = t => document.createElement(t);

const randomImage = g('img')
randomImage.src = 'https://picsum.photos/200'
randomImage.className="img-fluid"
randomImage.setAttribute('alt','Random Image')

const container = g('div')
container.className="container";
const row = g('div')
row.className="row justify-content-center align-items-center text-light";
// column-1
const col1 = g('div')
const col1Text = document.createTextNode('Col 1')
col1.appendChild(col1Text)
col1.className="col-md-4 bg-primary p-5"
// column-2
const col2 = g('div')
col2.className="col-md-4 bg-warning p-5"
col2.appendChild(randomImage)
// column-3
const col3 = g('div')
col3.className="col-md-4 bg-danger p-5"

row.append(col1)
row.append(col2)
row.append(col3)
container.append(row)
document.body.append(container)