async function fetchweather() {
    let cityname = document.getElementById("city");
    const url = "https://imdb-api.com/API/AdvancedSearch/k_44e3n05w/?title_type=tv_movie&genres=comedy&user_rating=8.1,10&release_date=2010-01-01,2010-05-01&languages=en"
    var response = await fetch(url);
    var data = await response.json();
    //console.log(data);
    return Promise.resolve(result);
    //return Promise.reject(result);
}
display().then(function(data) {
            console.log(data)
            let { result } = data;
            result.array.forEach(element => {
                    let { title, imdb_rating } = element;
                    console.log("movie_name is" + title + "and rating is " + imdb_rating)
                }, function() {
                    console.log("url not found")
                }

            })