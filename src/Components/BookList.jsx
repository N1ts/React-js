import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useBooksContext from '../hooks/use-books-context'


function BookList({book}){
    const {deleteBookById} = useBooksContext()
    console.log("book", book)
    
    const [isEdit, SetisEdit] = useState(true)



    const handleDelete = ()=>{
        deleteBookById(book.id)
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
            {book.title}
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
            {/* <BookEdit onEdit = {onEdit} title={title} id={id} onChangeTitle = {handleEdit}/> */}
            <BookEdit onEdit={book} onChangeTitle = {handleEdit}/>
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