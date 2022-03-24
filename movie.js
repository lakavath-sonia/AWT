async function display() {
    const url = "https://imdb-api.com/API/AdvancedSearch/k_44e3n05w/?title_type=tv_movie&genres=comedy&user_rating=8.1,10&release_date=2010-01-01,2010-05-01&languages=en"
    var response = await fetch(url);
    var data = await response.json();
    console.log(data);
    //return Promise.reject(result);
    var table = < table id = "mytable"
    border = "1"
    cellspacing = "2" > ;

    table += < tr >
        <
        th > name < /th> <th > rating </th > < th > stars < /th>  </tr > ;
    let { result } = data;
    result.array.foreach(element => {
            let [title, imdb_rating, stars] = element
        }
        table += "<tr>"; table += '<td> +title+</td>'; table += '<td> +imdb_rating</td>'; table += '<td> +stars+</td>'; table += '</tr>';
    );

    table += < /table>;
}
document.getElementById("result").innerHTML = table;