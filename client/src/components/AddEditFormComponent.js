import React from 'react';
import "./css/addbook.css";

const AddEditFormComponent = (props) => {
    let bookName="";
    let yearOfRelease="";
    let bookAuthor="";
    let id=0;
    let formTitle="Add Your Book";
    let btnText="Add Book";
    if(props.formType==="EDIT"){
        let bookItem = props.bookItem;
        formTitle="Edit Your Book";
        bookName=bookItem.bookName;
        bookAuthor=bookItem.bookAuthor;
        yearOfRelease=bookItem.yearOfRelease;
        id=bookItem.id;
        btnText="Update Book";
    }
    return(
        <form className="addform">
                <p>{formTitle}</p>
                <div className="textInputGroup">
                    <input className="addBookInputText" 
                           placeholder="Book Name" 
                           onChange={(e) => {bookName=e.target.value}} type="text" 
                           defaultValue={bookName} 
                           required/>
                    <input className="addBookInputText" 
                           placeholder="Author Name" 
                           onChange={(e) => {bookAuthor=e.target.value}} 
                           type="text" 
                           defaultValue={bookAuthor} 
                           required={true}/>
                    <input className="addBookInputText" 
                           title="release date" 
                           onChange={(e) => {yearOfRelease=e.target.value}} 
                           type="date" 
                           defaultValue={yearOfRelease} 
                           required={true}/>
                </div>
                <button className="addbtn" onClick={(e) => {
                        let editedBookObj={
                            id,
                            bookName,
                            bookAuthor,
                            yearOfRelease
                        }
                        props.formType === "EDIT" ? props.updateBookItem(editedBookObj) : props.addBookItem(props.getBookObj(bookName,bookAuthor,yearOfRelease))
                        props.setFormVisibility(false)
                }} type="button">{btnText}</button>
                <button className="addbtn" onClick={(e) => {
                        props.setFormVisibility(false)
                }} type="button">Cancel</button>
        </form>
    )
}

export default AddEditFormComponent;