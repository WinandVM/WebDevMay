// Element Generator
const g = t => document.createElement(t);

// const randomImage = g('img')
// randomImage.src = 'https://picsum.photos/200'
// randomImage.className="img-fluid"
// randomImage.setAttribute('alt','Random Image')

// const container = g('div')
// container.className="container";
// const row = g('div')
// row.className="row justify-content-center align-items-center text-light";
// // column-1
// const col1 = g('div')
// const col1Text = document.createTextNode('Col 1')
// col1.appendChild(col1Text)
// col1.className="col-md-4 bg-primary p-5"
// // column-2
// const col2 = g('div')
// col2.className="col-md-4 bg-warning p-5"
// col2.appendChild(randomImage)
// // column-3
// const col3 = g('div')
// col3.className="col-md-4 bg-danger p-5"

// row.append(col1)
// row.append(col2)
// row.append(col3)
// container.append(row)
// document.body.append(container)

// exercise-2 

/*

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
*/

const table = g('table')
table.className="table"

const thead = g('thead')
const trOfThead = g('tr')

const thIndex = g('th')
thIndex.innerText="#"
thIndex.setAttribute('scope','col')

const thFirst = g('th')
thFirst.innerText="First"
thFirst.setAttribute('scope','col')

const thLast = g('th')
thLast.setAttribute('scope','col')

const thHandle = g('th')
thHandle.setAttribute('scope','col')

console.log(table, thead)