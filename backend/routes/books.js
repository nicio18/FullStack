const {Router}=require("express");
const router = Router(); 
//se ponen dos puntos en el "../model porque sube dos niveles"

const Book = require("../models/Book");
router.get("/",async (req, res)=>{
   const books =  await Book.find();//busca todos los libros que estan en la base de datos
   res.json(books);
});

router.post("/", async(req, res)=>{
   const {title, author, isbn}= req.body;
   const newBook=new Book({title, author,isbn})
   await newBook.save();
   res.json({message: "Book Saved"});
})
router.delete("/:id", async(req,res)=>{
   await Book.findByIdAndDelete(req.param.id);
   res.json({message: "Book deleted"});

   
})
module.exports= router;