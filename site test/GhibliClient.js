let filmData = [];

document.addEventListener('readystatechange', event => {

    axios.get('https://ghibliapi.herokuapp.com/films')
        .then(function (response) {
            filmData = response.data
            if (filmData.length > 0) {
                divGenerator(filmData)
                return;
            }
            console.log('response data is empty or null');
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
});


function divGenerator(films) {
    document.getElementById("card").innerHTML = '';

    films.forEach(function (item, index) {
        let div = `
        <div class="card card-additional" id=${item.id}  style="width: 18rem;" onclick="onFilm(event)">
            <img src=${item.image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="cardTitle">${item.title}</h5>
                <p class="cardText">${item.description}</p>
                <div class="onClick buttons">
                    <a href="#" class="btn btn-primary people" onclick = "onPeople(event)">People</a>
                    <a href="#" class="btn btn-primary locations" onclick = "onLocations(event)">Locations</a>
                </div>

            </div>
        </div>`

        document.getElementById("card").innerHTML += div;
    });
}

// function onPeople() {
//     document.getElementById('popup').innerHTML = ''
//     let peoplePopup = '<div class="form-popup">' +
//         '<div class="popupText"></div>' +
//         '</div> '
//     document.getElementById('popup').innerHTML +='';
// }

function onFilm(event) {
    document.getElementById("popup").style.display = "flex";
    let filmId = event.currentTarget.id
    axios.get('https://ghibliapi.herokuapp.com/films/' + filmId)
        .then(function (response) {
            if (response.data) {
                let film = response.data
                createPopup(film)
                return;
            }
            console.log('response data is empty or null');
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });

}

function createPopup(film) {

    document.getElementById('popup').innerHTML = ''

    let filmPopup = `
        <div class="popupWindow" id=Popup  style="width: 25rem;" onclick="onFilm(event)">
            <div class="card-body">
                <h5 class="cardTitle">${film.title}</h5>
                <p class="popupText">${film.description}</p>
                <div class="onClick buttons">
                    <div class="btn close" onclick = "onClose()">Close</div>
                </div>

            </div>
        </div>`
    document.getElementById("popup").innerHTML += filmPopup

}

function onClose() {
    document.getElementById("Popup").style.display = "none";
}
