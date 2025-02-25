import { useState } from "react";
import BookEdit from "./BookEdit";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


function BookList({id, title, onDelete, onEdit}){
    const [isEdit, SetisEdit] = useState(true)

    const handleDelete = ()=>{
        onDelete(id)
    }

    const handleEdit = ()=>{
        // console.log("handleEdit")
        SetisEdit(!isEdit)
        // console.log(isEdit)
    }

    // let content = <BookEdit />
    return(
        <div className="booklist">
            {isEdit ?
            <> 
            <div className="book-inside-container">
            <div className="edit">
            <CiEdit onClick={handleEdit}/>
            </div>
            <div className="delete" >
            <MdDeleteOutline style={{marginLeft: "5px"}} onClick = {handleDelete}/>

            </div>
            </div>
            <div className="booklist-title">
            {/* {id} */}
            {title}
            </div>
            </>

            : 
            <>
            <div className="book-inside-container">
            {/* <div style={{textAlign: "right"}} className="edit"> */}
            <div className="edit">
            <CiEdit onClick={handleEdit}/>
            </div>
            <div className="delete">
            <MdDeleteOutline style={{marginLeft: "5px"}} onClick = {handleDelete}/>
            </div>
            </div>
            <div>
            <BookEdit onEdit = {onEdit} title={title} id={id} onChangeTitle = {handleEdit}/>
            </div>
            {/* <div className="booklist-title"> */}
            {/* {id} */}
            {/* {title} */}
            </>
            
}
        </div>
    )
}

export default BookList;