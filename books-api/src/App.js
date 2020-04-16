
import React, { Component } from 'react'
import './App.css'
import BookSearch from './BookSearch'
import TypeSelector from './TypeSelector'
// import BookList from './BookList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ['None'],
      filter: [],
      printType: [],
      apiKey: 'AIzaSyCVbQRgRf0EVWUyfVMaWhJqIwfzsSBVtsc',
      books: [],
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchTerm: event.target.value
    })
  }

  setFilter(filter) {
    this.setState({
      filter
    })
  }

  setPrintType(printType) {
    this.setState({
      printType
    })
  }

  componentDidMount() {
    console.log(this.state.searchTerm);
    console.log(this.state.filter);
    console.log(this.state.printType);
    
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}${this.state.filter}${this.state.printType}&key=${this.state.apiKey}`)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
           this.setState({
            books: responseJson.items,
          }
          );
        }
      );
  }

  render() {
    return (
      <div className="App">
        <header className="header">Google Book Search</header>
        <BookSearch />
        <TypeSelector />
        {this.state.books.map(book => {
          return (
            <div>
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.description}</p>
            </div>
          );
        })}
      </div>
    )
  }
}

export default App;
