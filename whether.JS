api_key = "a9416531306ab7444be40400827a9ef3"

async function refresh() {
      
    cities = ["jerusalem", "london", "new york"];        

    for (i = 0; i < cities.length; i++){
        console.log(i)
        city = cities[i]
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        res = await fetch(url)
        resJ = await res.json()            
        currentTemp = resJ.main.temp - 273.15;        
        currentTemp = currentTemp.toFixed(0);
        document.getElementById(city).innerHTML = currentTemp;
}
}

function changeBG(){

    if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "black"
        document.cookie = "color=black"

    }else {

        document.body.style.backgroundColor == "white"
        document.cookie = "white"   
    }
}

function cookieBG() {
    color = getCookie("color")
    if (! color){
        color="white"
    }
    document.body.style.backgroundColor = color
}

function getCookie(name){
    const value = `;${document.cookie}`;
    const parts = value.split(`;${name}=`)


}