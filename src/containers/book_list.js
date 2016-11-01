import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList(){

        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" 
                key={book.title} 
                onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    render(){
        return (
            <div>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //what ever is returned will show up as props inside BookList
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);