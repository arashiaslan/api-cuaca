const apiKey = "32f41d3b20198ec0017ffddf543728f1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".box-cari input");
const searchBtn = document.querySelector(".box-cari button");
const image = document.querySelector(".cuaca img");
const cuaca = document.querySelector(".cuaca .deskripsi");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".nama-kota").innerHTML = data.name;
    document.querySelector(".suhu").innerHTML = Math.round(data.main.temp) + "<span>°C</span>";
    document.querySelector(".info-kelembapan").innerHTML = data.main.humidity + "%";
    document.querySelector(".info-angin").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
        image.src = "img/1.png";
        cuaca.innerHTML = "Berawan";
    } else if (data.weather[0].main == "Clear") {
        image.src = "img/2.png";
        cuaca.innerHTML = "Cerah";
    } else if (data.weather[0].main == "Rain") {
        image.src = "img/5.png";
        cuaca.innerHTML = "Hujan Deras";
    } else if (data.weather[0].main == "Mist") {
        image.src = "img/6.png";
        cuaca.innerHTML = "Kabut";
    } else if (data.weather[0].main == "Drizzle") {
        image.src = "img/4.png";
        cuaca.innerHTML = "Gerimis";
    } else if (data.weather[0].main == "Snow") {
        image.src = "img/3.png";
        cuaca.innerHTML = "Salju";
    }

}

searchBtn.addEventListener("click", ()=> {
    const city = searchBox.value;
    checkWeather(city);
})
