import { useState, useContext } from "react"
import useBooksContext from '../hooks/use-books-context'

function BookEdit({onEdit, onChangeTitle}){
    const {editBookById} = useBooksContext()
    const [value, setValue] = useState(onEdit.title)
    
    const handleChange = (event)=>{
        console.log(event.target.value)
        setValue(event.target.value)
        console.log("value", value)
    } 
    console.log("value", value)

    const handleSubmit = (event)=>{
        event.preventDefault();
        editBookById(onEdit.id, value)
        onChangeTitle()
        // setValue('')

    }

    return(
        <div>
           <form onSubmit={handleSubmit}>
            <div style={{textAlign: "left", marginLeft: "10px", marginTop: "30px"}}>
                <h5 style={{margin: "0px", color: "gray"}}>Title</h5>
            </div>
            <input value={value} style={{width: "90px", marginBottom: "5px", marginTop: "5px"}}
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