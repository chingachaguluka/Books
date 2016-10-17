import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList(){

        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" key={book.title} >{book.title}</li>
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

export default connect(mapStateToProps)(BookList);