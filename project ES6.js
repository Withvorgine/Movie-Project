const Form = document.getElementById("film-form");
const DirectorElement = document.getElementById("director");
const TitleElement = document.getElementById("title");
const UrlElement = document.getElementById("url");
const cardBodyy = document.querySelectorAll(".card-body")[1];
const cardBodi = document.getElementById("clear-films");

//UI başlatma

//Adding all elements

eventListeners();

function eventListeners(){
    Form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let Films = Storage.GetFilmsFromStorage();
        UI.LoadAllFilms(Films);}
        )
    cardBodyy.addEventListener("click",DeleteFilm);
    cardBodi.addEventListener("click",DeleteAllFilms);
}

function addFilm(e){
    const director = DirectorElement.value;
    const title = TitleElement.value;
    const url = UrlElement.value;

    if(director === "" || title ==="" || url === ""){
        UI.DisplayMassage("Please fill the blanks","danger");
    }
    else{
        //yeni film
       const newFilm = new Film(title,director,url) ;

       UI.addFilmToUI(newFilm); //arayüze film ekleme
       UI.DisplayMassage("başarılı","success");
       Storage.AddFilmToStorage(newFilm);
    }

    UI.clearİnput(TitleElement,UrlElement,DirectorElement);

    e.preventDefault();
}
function DeleteFilm(e){
    if(e.target.id === "delete-film"){
        e.target.parentElement.parentElement.remove();
        Storage.DeleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.DisplayMassage("Movie has been wiped","success")
    }
   
}
function DeleteAllFilms (){
    if(confirm("are you sure?")){
        UI.ClearFilmsFromUI();
   Storage.ClearAllFilmsFromStorage();
    }
    
   
    

    }
