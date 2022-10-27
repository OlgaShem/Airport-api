const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8115f9ffe4msh9a2812f2457a5c6p1df0eajsnc6c637e02b35',
		'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
	}
};

function onSearch() {  
    let User = document.getElementById("userSearch").value;
    fetch('https://aerodatabox.p.rapidapi.com/airports/search/term?q='+ User +'&limit=10', options)
        .then(response => response.json())
        .then(data=> {
            JSON.stringify(data);
        let list = data["items"];
            console.log( data["items"])
            let cards = '';

            for (let item of list) {
                cards += `<div class="card">
                <p class="card__title">${item.name} </p>
                <p><span class="card__text-bold"> ICAO: </span>${item.icao} </p>
                <p><span class="card__text-bold"> Location: </span>${item.location.lat} ${item.location.lon} </p>
                </div>`
            }
            document.querySelector('.cards').innerHTML = cards;
            }
        )
        .catch(error => console.log(error));
}
