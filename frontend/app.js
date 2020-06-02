import "./styles/app.css";
//import BookService from "./services/bookService";

document.getElementById("book-form")
    .addEventListener("submit", (e) =>{
        const title =document.getElementById("title").value;
        const author =document.getElementById("author").value;
        const isbn =document.getElementById("ISBN").value;
        const image =document.getElementById("image").files;

        console.log(title, author, isbn, image);


 
        //cancelar envento por defecto, no se reinicia el formulario 
        e.preventDefault();

    });
