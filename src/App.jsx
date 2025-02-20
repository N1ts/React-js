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
        console.log(books)
    }

    const deleteBookById = (id)=>{
        console.log(id)
        const deletedBook = books.filter((book)=>
            {   
                return book.id !==id
            })
        setBooks(deletedBook)
    }

    const getBook = books.map((book, index)=> {
        console.log(book.title)
        return <BookList id = {book.id} title = {book.title} key={index}
        onDelete = {deleteBookById}
        />
    })

    return(
        <div className='app'>
            <BookCreate onCreate = {createTitle} />
            <div style={{display: "flex"}}>
            {getBook}
            </div>
        </div>
    )
}

export default App;