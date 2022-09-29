let url = 'http://localhost:8080/todos/?page=1';

let options = {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    
    'Content-Type': 'application/json',
    Origin: 'stamatia.com'
  }
};

fetch(url, options)
  .then(res => console.log(res))