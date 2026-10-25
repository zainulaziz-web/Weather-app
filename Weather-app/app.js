//https://api.openweathermap.org/data/2.5/weather?q=
//4e32fe1f42ddd60196cde3f0c829c12c&units&units=metric
const apikey = "&appid=4e32fe1f42ddd60196cde3f0c829c12c";






        



 let sea = document.querySelector("input");
 
  const weathericon = document.querySelector(".weather-icon");
  const invalidinput = document.querySelector(".error");

 async function check(value)
{  

const api =`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=4e32fe1f42ddd60196cde3f0c829c12c&units=metric`

   let response = await fetch(api);
   var data = await response.json();
   console.log(data)
    
if (data.cod !="404" && data.cod !="500" )
     {
       invalidinput.style.display ="none";
      document.querySelector(".weather").style.display="block";
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
      document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
      document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"; 
      if(data.weather[0].main =="Clear")
        {
         weathericon.src = "/images/clear.png";
        }
      else if (data.weather[0].main =="Rain")
       {
         weathericon.src = "/images/rain.png";
       }
     else if (data.weather[0].main=="Clouds")
      {
        weathericon.src = "/images/clouds.png";
      }
     else if (data.weather[0].main =="Drizzle")
      {
        weathericon.src ="/images/drizzle.png"
      }
     else if (data.weather[0].main == "Mist")
      {
        weathericon.src = "/images/mist.png"
      }
     else if  (data.weather[0].main == "Snow")
      {
        weathericon.src = "/images/snow.png"
      }

    }
else{
          invalidinput.style.display ="flex";
          document.querySelector(".weather").style.display="none";
          sea.value ="";

    }

let cross = document.querySelector(".icon");
cross.addEventListener("click",()=>{
     invalidinput.style.display ="none";
})


  
}






let btn = document.querySelector("button");

btn.addEventListener('click',()=>{
  
   check(sea.value); 
   sea.value="";
})


