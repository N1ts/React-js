import { useState } from "react"
import useBooksContext from "../hooks/use-books-context"
// import '../App.css'

function BookCreate(){
    const [value, setValue] = useState('')
    const {createTitle} = useBooksContext()
    // console.log("bookcreate", book.createTitle)

    // To set input entered value
    const handleChange =(event)=>{
            setValue(event.target.value)
            
    }

    // To prevent default for submission and provide value(title) to app parent component
    const handleSubmit = (event)=>{
        event.preventDefault()
        createTitle(value)
        setValue('')
    }

    return(
        <div className="book-container">
            <form onSubmit = {handleSubmit}>
            <h2 style={{color: "brown"}}>Add a Book</h2>
            <h4 style={{fontSize: "20px"}}>Title</h4>
            <input value={value} onChange={handleChange} className="input-container"/>
            <div className="button">
            <button>Submit</button>
            </div>
            </form>
        </div>
        
    )
}

export default BookCreate;