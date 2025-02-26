import React, { useEffect, useState } from 'react';
import BookCreate from './Components/BookCreate';
import './App.css'
import BookList from './Components/BookList';
import axios from 'axios';


function App(){
    const [books, setBooks] = useState([]);

    function getRandomInt() {
        return Math.floor(Math.random() * 20);
      }

    const createTitle = async (title)=>{
        const response = await axios.post('http://localhost:3001/books', {
            title: title
        })
        console.log(response)
        const updatedBooks = [...books, response.data]
        setBooks(updatedBooks)
        console.log("create-title", books)
    }

    const fetchBook = async()=>{
        const response = await axios.get("http://localhost:3001/books")
        setBooks(response.data)
    }

    useEffect(()=>{
        fetchBook()
    }, [])

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