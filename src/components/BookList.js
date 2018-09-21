import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selection: ''
		}
	}

    // Initialize selection
    updateSelection = (selection) => {
        this.setState({ selection });
    }

    render() {
        // Books by subjects
        let fiction = [];
        let science = [];

        // Initialize book by subjects
        this.props.books.map(book => {
            if (book.subjects.length > 1) {
                fiction.push(book);
                science.push(book);
            } else if (book.subjects.length === 1 && book.subjects[0] === 'Fiction') {
                fiction.push(book);
            } else if (book.subjects.length === 1 && book.subjects[0] === 'Science') {
                science.push(book);
            }
        })

        //TODO: compare fiction, science to selection


        console.log(this.state.selection);
        
  
        return (
            <section>
                <select onChange={(event) => this.updateSelection(event.target.value)} >
                    <option value="select" disabled>Select genre</option>
                    <option value="fiction">Fiction</option>
                    <option value="science">Science</option>
                </select>

                <ol>
                    {fiction.map(book => 
                        <Book key={book.id} book={book} />
                    )}
                </ol>

                <ol>
                    {science.map(book => 
                        <Book key={book.id} book={book} />
                    )}
                </ol>
                
            </section>
        );
    }
}

export default BookList;