import { useState } from "react";

function BookList({id, title, onDelete}){
    // const [isDelete, SetIsDelete] = useState('')

    const handleDelete = ()=>{
        onDelete(id)
    }

    return(
        <div className="booklist">
            <div style={{textAlign: "right"}}>
            <button>e</button>
            <button style={{marginLeft: "5px"}} onClick = {handleDelete}>
                d
            </button>
            </div>
            <img src="" alt="book" style={{marginTop: "6px"}}/>
            <div className="booklist-title">
            {id}
            {title}
            </div>
        </div>
    )
}

export default BookList;