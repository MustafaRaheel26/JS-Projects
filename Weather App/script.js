 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const apiKey = "1f30713a030fd083d20c03278fb0a7bd";

 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");
 const weatherImg =  document.querySelector(".Weather-icon");
 


 async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
          document.querySelector(".error").style.display="block";
          document.querySelector(".weather").style.display="none";
    }else{
          var data = await response.json();
    
         document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
         document.querySelector(".city").innerHTML=data.name;
          document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
         document.querySelector(".Wind").innerHTML=data.wind.speed +"Km/h";


        if(data.weather[0].main == "Smoke"){
            weatherImg.src = "Assets/humidity.png";   
       }
       else if(data.weather[0].main ==  "Clouds"){
           weatherImg.src = "Assets/clouds.png"; 
      }
      else if(data.weather[0].main ==  "Drizzle"){
           weatherImg.src = "Assets/drizzle.png";   
      }
      else if(data.weather[0].main ==  "Rain"){
          weatherImg.src = "Assets/rain.png";   
      }
      else if(data.weather[0].main ==  "Snow"){
       weatherImg.src = "Assets/snow.png" ;  
       }
       else if(data.weather[0].main == "Clear") {
           weatherImg.src = "Assets/clear.png"   
       }
       else if(data.weather[0].main == "Partially Cloudy"){
            weatherImg.src = "Assets/mist.png"
       }
          document.querySelector(".weather").style.display="none";
          document.querySelector(".weather").style.display="block";

    }

 }
 searchBtn.addEventListener("click",()=>{
     checkWeather(searchBox.value)
 })
 