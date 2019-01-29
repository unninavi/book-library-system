import React, { Component } from 'react';
import AddBookComponent from './components/AddBookComponent';
import BookGalleryComponent from './components/BookGalleryComponent';
import { getBookList } from './actions';
import {connect} from 'react-redux';

import './App.css';
class App extends Component {
    
    componentDidMount(){
        this.props.getBookList();
    }
    
    render() {
        let blurEffect= this.props.showAddForm ? {filter: "blur(5px)", pointerEvents:"none"} : {}
        return (
          <div className="App">
            <h2>Book Gallery</h2>
            <AddBookComponent />
            <div style={blurEffect}>
            <BookGalleryComponent />
            </div>
          </div>
        );
      }
}

function mapDispatchToProps(dispatch, ownProps){
    return{
        getBookList: () => {
            dispatch(getBookList())
        }

    }
}

function mapStateToProps(state){
    return{
        showAddForm:state.addFormVisibility,
        showEditForm:state.updateFormVisibility
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);