import { useState } from "react"

function BookCreate({onCreate}){
    const [value, setValue] = useState('')

    // To set input entered value
    const handleChange =(event)=>{
            setValue(event.target.value)
            
    }

    // To prevent default for submission and provide value(title) to app parent component
    const handleSubmit = (event)=>{
        event.preventDefault()
        onCreate(value)
        setValue('')
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
            <h3>Add a Book</h3>
            <h5>Title</h5>
            <input value={value} onChange={handleChange}/>
            <div>
            <button>Submit</button>
            </div>
            </form>
        </div>
    )
}

export default BookCreate;