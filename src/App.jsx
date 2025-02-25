import React, { useState } from 'react';
import BookCreate from './Components/BookCreate';
import './App.css'
import BookList from './Components/BookList';


function App(){
    const [books, setBooks] = useState([]);

    function getRandomInt() {
        return Math.floor(Math.random() * 20);
      }

    const createTitle = (title)=>{
        const id = getRandomInt()
        const updatedBooks = [...books, {id: id, title: title}]
        setBooks(updatedBooks)
        // console.log("create-title", books)
    }

    const deleteBookById = (id)=>{
        // console.log(id)
        const deletedBook = books.filter((book)=>
            {   
                return book.id !==id
            })
        setBooks(deletedBook)
    }

    const editBookById = (id, title)=>{
        // console.log("edit book id:" , id, title)
        const loopBooks = books.map((book)=>{
            if(book.id==id){
                console.log("matched", id)
                const updatedBook = {...book, title: title}
                return updatedBook
            }
            return book;
        })
        setBooks(loopBooks)
    }
    // console.log("after edit books", books)

    const getBook = books.map((book, index)=> {
        // console.log("book-title", book.title)
        return <BookList id = {book.id} title = {book.title} key={index}
        onDelete = {deleteBookById} onEdit = {editBookById}
        />
    })

    return(
        <div className='app'>
            <BookCreate onCreate = {createTitle} />
            <div style={{display: "flex", width: "800px",flexWrap: "wrap", margin: "auto"}}>
            {getBook}
            </div>
        </div>
    )
}

export default App;