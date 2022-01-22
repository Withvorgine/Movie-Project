class UI {
  constructor() {
  }
  static addFilmToUI(newFilm) {
    const filmList = document.getElementById("films");

    // <tr>
    //                                         <td><img src="" class="img-fluid img-thumbnail"></td>
    //                                         <td></td>
    //                                         <td></td>
    //                                         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //                                       </tr>
    filmList.innerHTML += `
  
  <tr id = "zibidi">
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
     </tr>`;
  }
  static clearİnput(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }
  static DisplayMassage(message, type) {
    const CardBody = document.querySelectorAll(".card-body")[0];

    const div = document.createElement("article");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    CardBody.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1000);
  }
  static LoadAllFilms(films) {
    const FilmList = document.getElementById("films");
    films.forEach(function (film) {
      FilmList.innerHTML += `
  
    <tr>
          <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
          <td>${film.title}</td>
          <td>${film.director}</td>
          <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
       </tr>`;
    });
  }
  // UI.prototype.DeleteFilmFromUI = function(element){
  //   element.parentElement.parentElement.remove();
  // }
  static ClearFilmsFromUI() {
    const FilmList = document.getElementById("films");

    while (FilmList.firstElementChild !== null) {
      FilmList.firstElementChild.remove();
    }
  }
}


