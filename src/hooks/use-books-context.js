import { useContext } from "react";
import { BookContext } from "../Context/bookContext";

function useBooksContext(){
    return useContext(BookContext)
}

export default useBooksContext