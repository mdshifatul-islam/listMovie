const form = document.querySelector("#form");
const movieName = document.querySelector("#name");
const director = document.querySelector("#director");
const country = document.querySelector("#country");
const year = document.querySelector("#year");
const submit = document.querySelector("#submit");
const bookList = document.querySelector("#bookList");

form.addEventListener('submit', (e) => {
    e.preventDefault();


    if(movieName.value === "" || director.value === "" || country.value === "" || year.value === ""){
        alert("Ja jigaisi ta den vai!!!")
    }else{
        const newRow = document.createElement('tr');
        
        const newMovie = document.createElement('td');;
        newMovie.innerHTML = movieName.value;
        newRow.appendChild(newMovie);

        
        const newDirector = document.createElement('td');;
        newDirector.innerHTML = director.value;
        newRow.appendChild(newDirector);

        
        const newCountry = document.createElement('td');;
        newCountry.innerHTML = country.value;
        newRow.appendChild(newCountry);

        
        const newYear = document.createElement('td');;
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);


        bookList.appendChild(newRow);

        movieName.value = "";
        director.value = "";
        country.value = "";
        year.value = "";

    }



})