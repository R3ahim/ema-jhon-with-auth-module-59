const api_key = `b39a817020206c3071d9c08e692a19ff`;
// console.log(api_key);
const searchTemperature =() =>{
    
        const city = document.getElementById('city-name').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    //    console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data => displayTem(data))
}

 const setInnerText = (id, city) =>{
     document.getElementById(id).innerText = city;
 }

const displayTem = temperature =>{
    

       setInnerText('city',temperature.name)  
       setInnerText('temperature',temperature.main.temp)
       setInnerText('temperature',temperature.main.temp)
       setInnerText('conditions',temperature.weather[0].main);
       console.log(temperature);



    //    set url icoen 

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url)


}