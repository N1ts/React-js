import { useState } from "react"

function BookEdit({onEdit, title, id}){
    const [value, setValue] = useState('')
    
    const handleChange = (event)=>{
        console.log(event.target.value)
        setValue(event.target.value)
        // console.log("value", value)
    } 
    console.log("value", value)

    const handleSubmit = (event)=>{
        event.preventDefault();
        onEdit(id, value)
        setValue('')

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h5>{title}</h5>
            <input value={value} style={{width: "50px"}}
            onChange = {handleChange}
            />
            <div>
            <button >Save</button>
            </div>
            </form>
        </div>
    )
}

export default BookEdit;