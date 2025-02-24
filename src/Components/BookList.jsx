import { useState } from "react";
import BookEdit from "./BookEdit";

function BookList({id, title, onDelete, onEdit}){
    const [isEdit, SetisEdit] = useState(true)

    const handleDelete = ()=>{
        onDelete(id)
    }

    const handleEdit = ()=>{
        console.log("handleEdit")
        SetisEdit(!isEdit)
        console.log(isEdit)
    }

    // let content = <BookEdit />
    return(
        <div className="booklist">
            {isEdit ? 
            <>
            <div style={{textAlign: "right"}}>
            <button onClick={handleEdit}>e</button>
            <button style={{marginLeft: "5px"}} onClick = {handleDelete}>
                d
            </button>
            </div>
            <img src="" alt="book" style={{marginTop: "6px"}}/>
            <div className="booklist-title">
            {id}
            {title}
            </div>
            </> 

            : 
            <div>
            <div style={{textAlign: "right"}}>
            <button onClick={handleEdit}>e</button>
            <button style={{marginLeft: "5px"}} onClick = {handleDelete}>
                d
            </button>
            <BookEdit onEdit = {onEdit} title={title} id={id}/>
            </div>
            <img src="" alt="book" style={{marginTop: "6px"}}/>
            <div className="booklist-title">
            {id}
            {title}
            </div>
            </div>
}
        </div>
    )
}

export default BookList;