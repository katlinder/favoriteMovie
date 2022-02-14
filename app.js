const container = document.querySelector(".container");

//get data from server

const url = "https://api.themoviedb.org/3/movie/550?api_key=865adbc0a947955b5613de57a59d92a6";

fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data.title);
    console.log(data.overview);
    console.log(data.release_date);

    //format date to get a year
    let year = new Date(data.release_date).getFullYear();
    console.log(year);
    let imagePath = data.poster_path;
    let imageUrl = "https://www.themoviedb.org/t/p/w1280/"+imagePath
    console.log(imageUrl);
    let movieTitle = document.createElement("h1");
movieTitle.textContent = `${data.title} ${year}`;
container.appendChild(movieTitle);

let overview = document.createElement("p");
overview.textContent = data.overview;
container.appendChild(overview);

let moviePoster = document.createElement("img");
moviePoster.src = imageUrl;
container.appendChild(moviePoster);

});