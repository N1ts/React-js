import { useState } from "react"

function BookEdit({onEdit, title, id, onChangeTitle}){
    const [value, setValue] = useState(title)
    
    const handleChange = (event)=>{
        console.log(event.target.value)
        setValue(event.target.value)
        console.log("value", value)
    } 
    console.log("value", value)

    const handleSubmit = (event)=>{
        event.preventDefault();
        onEdit(id, value)
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