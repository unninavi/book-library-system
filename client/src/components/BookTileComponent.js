import React from 'react';
import {connect} from "react-redux";
import './css/booktile.css';
import {updateBookItem, setUpdateFormVisibility, setUpdateItem} from '../actions';
import AddEditFormComponent from './AddEditFormComponent';

const BookTileComponent = (props) => {
    let blurEffect= props.updateFormVisibility ? {filter: "blur(5px)", pointerEvents:"none"} : {}
    return(
        <div>
           <div className="todotile" style={blurEffect}>
                <h6 className="tileText">{props.bookItem.bookName}</h6>
                <i className="tileText">Author: {props.bookItem.bookAuthor}</i>
                <hr/>
                <div>
                    <i>{props.bookItem.yearOfRelease}</i>
                    <span className="todooperation">
                        <input type="button" className="editbutton" 
                        onClick={(e)=>{
                            props.setUpdateItem(props.bookItem)
                            console.log("mybookitem", props.bookItem);
                            props.setUpdateFormVisibility(true)
                        }}/>
                    </span>
                </div>
                
            </div>
            
            {props.updateFormVisibility ? 
                <AddEditFormComponent bookItem={props.updateItem} 
                                      updateBookItem={props.updateBookItem} 
                                      setFormVisibility={props.setUpdateFormVisibility}
                                      formType="EDIT"
                                      />: false
            }
        </div>
    );
}


function mapDispatchToProps(dispatch, ownProps){
    return{
        setUpdateItem: (bookObj) => {
            dispatch(setUpdateItem(bookObj))
        },
        setUpdateFormVisibility: (visibilityInd) => {
            dispatch(setUpdateFormVisibility(visibilityInd))
        },updateBookItem: (bookObj) => {
            dispatch(updateBookItem(bookObj))
        },
        
    }    
}


function mapStateToProps(state){
    return{
        updateFormVisibility:state.updateFormVisibility,
        updateItem:state.updateItem
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (BookTileComponent);