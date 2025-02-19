import React, { useState } from 'react';
import BookCreate from './Components/BookCreate';

function App(){
    const [book, setBook] = useState([]);

    const createTitle = (title)=>{
        setBook(title)
    }

    return(
        <div>
        <BookCreate onCreate = {createTitle} />
        {book}
        </div>
    )
}

export default App;