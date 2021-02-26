import React from 'react';
import Book from '../Book/book';

function BookViewer(props){ 
    return(
        <div className="row row-spacer"> 
            <div className="col-md-3 d-flex">
                <button onClick={() => props.previousBook()}>Previous Book</button>
            </div>
            <div className="col-md-6">
                <Book book={props.book}/>                 
            </div>
            <div className="col-md-3 d-flex justify-content-end">
                <button onClick={() => props.nextBook()}>Next Book</button>
            </div>
        </div> 
    )
}
export default BookViewer;