
//Api weather
let weather = document.getElementById("weather");


function test() {
    let holle = document.getElementById("location");
    let value = holle.value;
    console.log(value)
    fetchApi(value);
}



async function fetchApi(location) {
    const currentLocation = location == undefined ? "battambang" : location;

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${currentLocation}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67e51170a1mshc515adaabac9158p1dccc9jsn467590858dcb',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const date = new Date(result.location.localtime);
        //convert number month to june month
        const month = moment(date).format("MMMM");
        const day = moment(date).format("DD")
        console.log(result);
        let weatherIcon = document.getElementById("weatherIcon");
        let temperature = document.getElementById("temperature");
        let description = document.getElementById("description");
        let city = document.getElementById("city");
        let months = document.getElementById("month");
        let days = document.getElementById("day");
        let Ocads = document.getElementById("Ocads");
        weatherIcon.src = result.current.condition.icon;

        temperature.innerText = "";
        temperature.innerHTML += `<div>${result.current.temp_c}&deg;</div>`;

        description.innerText = "";
        description.innerText = result.current.condition.text;

        city.innerText = "";
        city.innerText += `${result.location.country} ,${result.location.name}`;

        months.innerText = "";
        months.innerText += `${month}`;

        days.innerText = "";
        days.innerText += `${day}`;

    } catch (error) {
        console.error(error);
    }
}

weather.innerHTML += `
        
<select id="location" class="location" onchange="test()">
    <option value="battambang">Battambang</option>
    <option value="phom-penh">Phom-Penh</option>
</select>
<div class="weatherIcon"><img src="" alt="" id="weatherIcon"></div>
<div class="weatherData">
    <h1 class="temperature" id="temperature"></h1>
    <h2 class="description"><marquee><div id="description"></div></marquee></h2>
    <h3 class="city" id="city"></h3>
</div >
    <div class="date">
        <h4 class="month" id="month"></h4>
        <h5 class="day" id="day"></h5>
    </div>

`;

fetchApi();
