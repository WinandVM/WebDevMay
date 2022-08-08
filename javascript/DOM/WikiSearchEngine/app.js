const searchInput = document.querySelector('.searchInput') // input element
const [wikiSearch, wikiSearchRandom] = document.querySelectorAll('button'); // search buttons
const ResultsSection = document.querySelector('.results'); // results section

// https://en.wikipedia.org/w/api.php?action=query&list=search&prop=summary&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=reactjs
async function searchData(keyword, limit) {
    let response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=summary&inprop=url&utf8=&format=json&origin=*&srlimit=${limit}&srsearch=${keyword}`)
    let data = await response.json() // retrieve the data from the response
    return data
}

/*
<li class="list-group-item d-flex justify-content-between align-items-start">
                       <div class="ms-2 me-auto">
                            <div class="fw-bold">title</div>
                            Short description
                        </div> 
                        
                    </li>
                    
*/

const g = t => document.createElement(t) // create element
function HtmlTemplateGenerator(obj) {
    const li = g('li')
    li.className = "list-group-item d-flex justify-content-between align-items-start"

    const parentDiv = g('div')
    parentDiv.className = "ms-2 me-auto"
    const textOfParentDiv = document.createTextNode(obj.snippet)
  

    const childDiv = g('div')
    childDiv.className = "fw-bold"
    const textOfChildDiv = document.createTextNode(obj.title)
    childDiv.append(textOfChildDiv)
    parentDiv.append(childDiv)
    parentDiv.append(textOfParentDiv)
    li.append(parentDiv)
    return ResultsSection.append(li)
}


wikiSearch.addEventListener('click', (e) => {
    // fetching data here
    searchData(searchInput.value, 30)
        .then(data => {
            console.log(data.query.search) // retrieved data
            data.query.search.forEach(obj=>{
                HtmlTemplateGenerator(obj)
            })
        })
    console.log('hello world', searchInput.value)
    e.preventDefault()
})