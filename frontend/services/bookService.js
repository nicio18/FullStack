class BookService{
    constructor(){
        this.uri = 'http://localhost:4000/api/books';

    }
    async getBook() {
       const response = await fetch(this.uri);
       //convertir string, dato crudo, a json
       const books = await response.json();
       return books;

    }

    async postBook(book) {
       const res = await fetch(this.uri,  {
            method: 'POST',
            body: book
        });
        ///
        const data =  await res.json();

    }
    async deleteBook(bookId){
        const response = await fetch(`${this.uri}/${bookId}`, {            
            headers:{
                "Content-Type": "application/json"
            },
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);


    }
}
module.exports= BookService;
