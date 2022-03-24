async function fetchweather() {
    let cityname = document.getElementById("city");
    const url = " https://api.openweathermap.org/data/2.5/weather?q=" + cityname.value + "&appid=243433539869b67b09918c0e8b63e8af";
    var response = await fetch(url);
    var result = await response.json();
    //return Promise.resolve(result);
    //return Promise.reject(result);
    console.log(result)
    let { main: { temp, temp_min, temp_max } } = result;
    console.log(" temp" + temp);
    console.log("temp-min" + temp_min);
    console.log("temp-max" + temp_max);
    document.getElementById("test").innerHTML = temp;
}