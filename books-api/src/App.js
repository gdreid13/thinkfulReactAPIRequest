
import React, { Component } from 'react'
import './App.css'
import BookSearch from './BookSearch'
import TypeSelector from './TypeSelector'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ['None'],
      filter: [''],
      printType: [''],
      apiKey: 'AIzaSyCVbQRgRf0EVWUyfVMaWhJqIwfzsSBVtsc',
      books: [''],
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
        .then(items => {
          console.log(items);
/*           this.setState({
            title: items.volumeInfo.title,
            description: items.volumeInfo.description,
          }
          ); */
        }
      );
  }

  render () {
    return (
      <div className="App">
        <header className="header">Google Book Search</header>
        <BookSearch />
        <TypeSelector />
        {this.state.books && (
          <div className="booklist">
            {this.state.books}
          </div>
        )}
      </div>
    );
  }
}

export default App;
