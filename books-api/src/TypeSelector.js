
import React, { Component } from 'react';


class TypeSelector extends Component {

  constructor(props) {
    super(props)
  }

  render () {

    return (
      <form>
        <label htmlFor="filter">Print Type:</label>
        <select id="filter" name="filter">
          <option value="None">Select one...</option>
          <option value={"\u0026"+"filter=partial"}>Only view options with partial previews</option>
          <option value={"\u0026"+"filter=full"}>Only view options with full previews</option>
          <option value={"\u0026"+"filter=free-ebooks"}>Only view free Google eBooks</option>
          <option value={"\u0026"+"filter=paid-ebooks"}>Only view purchaseable Google eBooks</option>
          <option value={"\u0026"+"filter=ebooks"}>View all Google eBooks</option>
        </select>

        <label htmlFor="printType">Book Type:</label>
        <select id="printType" name="printType">
          <option value="">Select one...</option>
          <option value={"\u0026"+"printType=books"}>Books</option>
          <option value={"\u0026"+"printType=magazines"}>Magazines</option>
        </select>
      </form>
    )
  };
}

TypeSelector.defaultProps = {
  filter: [],
  printType: []
}

export default TypeSelector;