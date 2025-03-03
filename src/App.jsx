import React, { useEffect, useState, useContext } from 'react';
import BookCreate from './Components/BookCreate';
import './App.css'
import BookList from './Components/BookList';
import axios from 'axios';
import useBooksContext from '../src/hooks/use-books-context';

function App(){
    const { books, fetchBook } = useBooksContext()
    console.log(fetchBook)


    useEffect(()=>{
        fetchBook()
    }, [])

    const getBook = books.map((book)=> {
            // console.log("book-title", book.title)
            return <BookList book={book} key = {book.id}/>
        })

    return(
        <div className='app'>
            <BookCreate />
            <div style={{display: "flex", width: "800px",flexWrap: "wrap", margin: "auto"}}>
            {getBook}
            </div>
        </div>
    )
}

export default App;