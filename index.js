// fething apic
function content(city)
{
    const apikey = "a6db60c80a37c49f3b8414fd08039421"

const URL =`https://api.openweathermap.org/data/2.5/weather?units=metricw&q=${city}&appid=${apikey}`
fetch(URL).then(response=>response.json()).then((data)=>{
    const code=data.cod;
    const error=document.querySelector(".error_msg")
 if(code==404)
 {
      error.classList.remove("success");
      error.innerHTML="Incorrect City!"
       error.classList.add("fail")
 }
 else
 {
    error.classList.remove("fail")
     error.innerHTML = "Looks Good!"
     error.classList.add("success")
 }
 var humidity=data.main.humidity
 const humidity_tag=document.querySelector(".strom2")
    humidity_tag.innerHTML = humidity +"°";
    const description=data.weather[0].description;
    const info=document.querySelector(".info");
    info.innerHTML=description;

//  image query select
const image=document.querySelector(".main-pic")
    switch(description)
    {
        case "overcast clouds":
            image.setAttribute("src","./assets/clouds.png")
            break;
        case "light rain":
            image.setAttribute("src","./assets/drizzle.png")
            break;
        case "clear sky":
            image.setAttribute("src","./assets/clear.png")
            break;
        case "mist":
            image.setAttribute("src","./assets/mist.png")
            break;
        case "rain":
            image.setAttribute("src","./assets/rain.png");
            break;
        case "haze":
            image.setAttribute("src","./assets/snow.png")
            break;

        };
    const wind=document.querySelector(".strom1")
     const wind_value=data.wind.speed;
     wind.innerHTML=wind_value+"km/h";
    //  temprature
    const temp_tag=document.querySelector(".temp");
    const temp = (data.main.temp - 273) ;
    temp_tag.innerHTML = Math.round(temp) + "°C";
    // location
    const location=document.querySelector(".location");
    const loc=data.name;
    location.innerHTML=loc;
})

}
const city=document.querySelector(".city")


if (city.value == "") {
 
    content("republic of INDIA")
}
city.addEventListener(("keyup"),(e)=>{
     let city_name=e.target.value;
     content(city_name)

     
})


