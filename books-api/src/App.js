import React, { Component } from 'react'
import './App.css'
import BookSearch from './BookSearch'
import TypeSelector from './TypeSelector'
// import BookList from './BookList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: [],
      printType: [],
      apiKey: 'AIzaSyCVbQRgRf0EVWUyfVMaWhJqIwfzsSBVtsc',
      books: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSearch = this.getSearch.bind(this);

  }

  handleSubmit(event) {

    event.preventDefault();
    console.log(event);
    console.log(`handleSubmit ${event.currentTarget[0].value}`);
/*     this.setState({
      searchTerm: event.currentTarget[0].value
  }) */
    const searchTerm = event.currentTarget[0].value;
    this.getSearch(searchTerm);
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

  getSearch(searchTerm) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}${this.state.filter}${this.state.printType}&key=${this.state.apiKey}`)
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

  componentDidMount() {
    console.log(this.state.searchTerm);
    console.log(this.state.filter);
    console.log(this.state.printType);
  }

  render() {
    return (
      <div className="App">
        <header className="header">Google Book Search</header>
        <BookSearch handleSubmit={this.handleSubmit}/>
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
