import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // this.textInput = React.createRef();
    this.state = {
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      count: 0}
  }

  binarySearch(array, value, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
    this.setState({data: this.state.data, count: this.state.count + 1});
  
    // we haven't found the item past our end condition, return -1
    if (start > end) {
      return -1;
    }
  
    const index = Math.floor((start + end) / 2);
    const item = array[index];
  
    console.log(start, end);
    if (item === value) {
      return index;
    }
    else if (item < value) { // if item is less than value, then we know it's in the second half of the array
      return this.binarySearch(array, value, index + 1, end);
    }
    else if (item > value) { // if item is greater tha nvalue, then we know it's in the first half of the array
      return this.binarySearch(array, value, start, index - 1);
    }
  }

  
indexOf(array, value) {
  for (let i=0; i<array.length; i++) {
    this.setState({data: this.state.data, count: this.state.count + 1});
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

callIndexOf(array, value) {
  console.log('in call index of');
  this.setState({data: this.state.data, count: 0});
  this.indexOf(array, value);
  let found = this.index
  this.textInput.value = '';
}

callBinarySearch(array, value) {
  console.log('in binary search');
  this.setState({data: this.state.data, count: 0});
  this.binarySearch(array, value);
  this.textInput.value = '';
}

//For both buttons
//have counter that counts how many steps
//Return either the number or not found

  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => e.preventDefault()}>
          <input ref={input => this.textInput = input} type="text"></input>
          <button onClick={() => this.callIndexOf(this.state.data, this.textInput.value)}>Linear Search</button>
          <button onClick={() => this.callBinarySearch(this.state.data, this.textInput.value)}>Binary Search</button>
        </form>
      </div>
    );
  }
}

export default App;
