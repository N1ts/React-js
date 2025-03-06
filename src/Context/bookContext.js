import { createContext, useState} from "react";
import axios  from "axios";

export const BookContext = createContext();

export default function Provider({children}){
        const [books, setBooks] = useState([]);

        
        const fetchBook = async()=>{
            const response = await axios.get("http://localhost:3001/books")
            setBooks(response.data)
        }

        const createTitle = async (title)=>{
            const response = await axios.post('http://localhost:3001/books', {
                title: title
            })
            console.log(response)
            const updatedBooks = [...books, response.data]
            setBooks(updatedBooks)
            // console.log("create-title", books)
        }
    

        const deleteBookById = async (id)=>{
            // console.log(id)
            await axios.delete(`http://localhost:3001/books/${id}`)
            const deletedBook = books.filter((book)=>
                {   
                    return book.id !==id
                })
            setBooks(deletedBook)
        }
    
        const editBookById = async (id, title)=>{
            // console.log("edit book id:" , id, title)
            const response = await axios.put(`http://localhost:3001/books/${id}`,{
                title: title
            })
    
            const loopBooks = books.map((book)=>{
                if(book.id==id){
                    console.log("matched", id)
                    const updatedBook = {...book, title: response.data.title}
                    return updatedBook
                }
                return book;
            })
            setBooks(loopBooks)
        }


    return (
        <BookContext.Provider value= {{books, setBooks, createTitle, fetchBook, deleteBookById, editBookById}} >
            {children}
        </BookContext.Provider>
    )
}

