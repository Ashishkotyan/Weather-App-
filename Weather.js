
const weatherApi = {
    key: "f459f719b25f604e7eafc80a869db64c",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
}


// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const serchinput = document.getElementById("input-box");

// event listener function on keypree   
serchinput.addEventListener("keypress", (event) =>{

    if(event.keyCode == 13)
    {
        console.log(serchinput.value);
        getweatherReport(serchinput.value);
    }


})


 

// get weather report

function getweatherReport(city) {

    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showweatherReport);

}

// show weather report 

function showweatherReport(weather){


    console.log(weather)

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`; 

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${ Math.round(weather.main.temp)}&deg:C`;

    let minman = document.getElementById("min-max");

      minman.innerHTML = `${ Math.floor(weather.main.temp_min)}&deg:C (min)/ ${ Math.floor(weather.main.temp_max)}&deg:C (max)`;

      let weathertype  = document.getElementById('weather');

      weathertype.innerText = `${weather.weather[0].main}`

      let date = document.getElementById("date");
      let todate = new Date();

      date.innerHTML = dataManage(todate);
      
      if(weathertype.textContent == 'Clear')
      {
          document.body.style.backgroundImage = "url('1.jpg')";

      }
      else  if(weathertype.textContent == 'Clouds')
      {
          document.body.style.backgroundImage = "url('clouds.jpg')";

      }
      else if(weathertype.textContent == 'Rain')
      {
          document.body.style.backgroundImage = "url('rain.jpg')";

      }
      else if(weathertype.textContent == 'Snow')
      {
          document.body.style.backgroundImage = "url('snow.jpg')";

      }

}

//date manage

function dataManage(dateArg)
{


    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


let year = dateArg.getFullYear();
let month = months[dateArg.getMonth()];
let date = dateArg.getDate();
let day = days[dateArg.getDay()];

return `${date} ${month} ${day}, ${year}`;






}

