import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // this.textInput = React.createRef();
    this.state = {
      data: [1, 2, 3, 5, 6, 6, 6, 7, 7, 9, 9, 11, 13, 13, 13, 14, 14, 15, 16, 16, 17, 21, 22, 23, 24, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 30, 31, 32, 32, 33, 34, 38, 38, 39, 40, 40, 42,
        42, 43, 44, 45, 46, 46, 46, 48, 49, 50, 51, 51, 53, 53, 54, 55, 56, 62, 63, 64, 64, 64, 65, 67, 68, 69, 69, 70, 70, 72, 72, 73, 73, 76, 78, 78, 80, 81, 82, 83, 84, 85, 87, 87, 88, 88, 89, 90, 91, 93, 97, 98, 98],
      count: 0, error: null}
  }

  binarySearch(array, value, start, end, count=0) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
    count++;
    console.log(count);
    // we haven't found the item past our end condition, return -1
    if (start > end) {
      return -1;
    }
  
    const index = Math.floor((start + end) / 2);
    const item = array[index];
  
    if (item === parseInt(value, 10)) {
      this.setState({count});
      return index;
    }
    else if (item < value) { // if item is less than value, then we know it's in the second half of the array
      return this.binarySearch(array, value, index + 1, end, count);
    }
    else if (item > value) { // if item is greater tha nvalue, then we know it's in the first half of the array
      return this.binarySearch(array, value, start, index - 1, count);
    }
  }

  
indexOf(array, value) {
  let count = 0;
  for (let i=0; i<array.length; i++) {
    count++;
    if (array[i] === parseInt(value, 10)) {
      this.setState({count});
      return i;
    }
  }
  return -1;
}

clearValues() {
  this.setState({count: 0, error: null});
}

callIndexOf(array, value) {
  this.clearValues();
  const found = this.indexOf(array, value);
  if (found === -1) {
    this.setState({error: 'Your value is not in the array'});
  }
  this.textInput.value = '';
}

callBinarySearch(array, value) {
  this.clearValues();
  const found = this.binarySearch(array, value);
  if (found === -1) {
    this.setState({error: 'Value not in array'});
  }
  this.textInput.value = '';
}

//For both buttons
//have counter that counts how many steps
//Return either the number or not found

  render() {
    let error;
    let successMessage;
    if (this.state.error) {
      error = <p>{this.state.error}</p>;
    }
    if (this.state.count) {
      successMessage = <p>{`Your value was found in ${this.state.count} steps`}</p>;
    }
    return (
      <div className="App">
        <form onSubmit={(e) => e.preventDefault()}>
          <input ref={input => this.textInput = input} type="text"></input>
          <button onClick={() => this.callIndexOf(this.state.data, this.textInput.value)}>Linear Search</button>
          <button onClick={() => this.callBinarySearch(this.state.data, this.textInput.value)}>Binary Search</button>
        </form>
        {error}
        {successMessage}
      </div>
    );
  }
}

export default App;
