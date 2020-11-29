
async function fetchMyData() {
    return  fetch('https://my-json-server.typicode.com/Sonya-Shultz/sonya-shultz.github.io/db', 
    {method: "GET",  headers: {"content-type": "application/json"}})
    .then(result => result.json())
    .then(data => {return data;})
}
async function postOrder(Order) {
    fetch('https://my-json-server.typicode.com/Sonya-Shultz/sonya-shultz.github.io/posts', {
	method: "POST",
	body: JSON.stringify(Order),
	headers: {
		'Content-type': 'application/json'
	}
    }).then(function (response) {
	    if (response.ok) {
		    return response.json();
	    }
	    return Promise.reject(response);
    }).then(function (data) {
	    console.log(data);
    }).catch(function (error) {
	    alert('Помилка Сервера '+ error);
    });
}
export {fetchMyData,postOrder};