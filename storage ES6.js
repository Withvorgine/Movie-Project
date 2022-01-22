class Storage {
    constructor() {
    }
    static AddFilmToStorage(newFilm) {
        let films = this.GetFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));

    }
    static GetFilmsFromStorage() {
        let films;

        if (localStorage.getItem("films") === null) {
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }
    static DeleteFilmFromStorage(FilmTitle) {
        let films = this.GetFilmsFromStorage();
        // splice
        films.forEach(function (film, index) {
            if (film.title === FilmTitle) {
                films.splice(index, 1);
            }
        });
        localStorage.setItem("films", JSON.stringify(films));
    }
    static ClearAllFilmsFromStorage() {

        localStorage.removeItem("films");
    }
}
