// function generatedDiv() {
//     divGenerator()
// }
//
// function divGenerator(films){
//     document.getElementById("card").innerHTML = ''  ;
//
//     films.forEach(function(item, index) {
//         let div = `
//         <div class="card card-additional" id=${item.id}  style="width: 18rem;" onclick="onFilm(event)">
//             <img src=${item.image} class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="cardTitle">${item.title}</h5>
//                 <p class="cardText">${item.description}</p>
//                 <div class="onClick buttons">
//                     <a href="#" class="btn btn-primary people" onclick="onPepople(event)">People</a>
//                     <a href="#" class="btn btn-primary locations" onclick="onPepople(event)">Locations</a>
//                 </div>
//
//             </div>
//         </div>`
//
//         document.getElementById("card").innerHTML += div;
//     });
// }
//
// function onFilm(event){
//     let filmId = event.currentTarget.id
//     let film = filmData.find(x => x.id === filmId);
//     createPopup(film)
// }
//
// function createPopup(film) {
//     document.getElementById('popup').innerHTML = ''
//     let filmPopup = ' <div class="form-popup" id="myForm">\n' +
//         '        <form action="#" class="form-container">\n' +
//         '            <h1>${item.title}</h1>\n' +
//         '\n' +
//         '            <div class="user Login">\n' +
//         '                <label><b>Login</b></label>\n' +
//         '                <input type="text" id="userLogin2" class="Input" placeholder="Username">\n' +
//         '            </div>\n' +
//         '\n' +
//         '            <label><b>Old Password</b></label>\n' +
//         '            <input type="text" placeholder="Old Password" class="Input" id="oldPassword" required>\n' +
//         '\n' +
//         '            <label><b>Password</b></label>\n' +
//         '            <input type="password" placeholder="New Password" class="Input" id="newPassword" required>\n' +
//         '\n' +
//         '            <button type="submit" class="btn" onclick="setNewPassword()">Login</button>\n' +
//         '            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>\n' +
//         '        </form>\n' +
//         '    </div>'
//     document.getElementById("popup").innerHTML += filmPopup
// }
