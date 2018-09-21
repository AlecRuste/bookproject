import React, { Component } from 'react';
import BookList from './components/BookList';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		}
	}

	// Initialize state with data
  	componentDidMount() {
		this.fetchData();
	}
	
	// Get Data
 	fetchData() {
		fetch('http://localhost:3010/books')
		.then(response => response.json())
		.then(data => {
			this.setState({ books: data });
		})
		// Catch error on getting data
		.catch(error => alert('Unable to retrieve data' + error))
	}

  	render() {
		return (
	  		<main>
				<BookList books={this.state.books} changeBooks={this.changeBooks} />
	  		</main>
		);
  	}
}

export default App;
