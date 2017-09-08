import React, { Component } from 'react';
import './App.css';
import Bu from './buttonComponent'
import Result from './resultComponent'


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      result: '',
      array: [],
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }
  handleClick = function (event) {
    //console.log(event.target)
    // console.log(event.target.getAttribute("value"))
    var c = this.state.count;
    let cal = event.target.getAttribute("value");
    if (['+', '-', '*', '/'].includes(cal) === true) {
      this.setState({
        count: c + 1
      })
    }

    if (this.state.count <= 1) {
      let arr = this.state.array
      arr.push(cal)


      this.setState({

        array: arr
      })

    }
  }
  evaluate = function (event) {
    
  
    var operatorArray = ['+', '-', '*', '/']
    var arraye = this.state.array
   
    var a = arraye[0];
    if (a !== '+'&& arraye.length>1) {
      var b;
      var i = 1;
      while (i < arraye.length) {
        if (operatorArray.includes(arraye[i]) === false) {
          a = "" + a + arraye[i];
          i++
        }
        else
          break;

      }
      var operator = arraye[i];

      i++;
      b = arraye[i];
      i++;
      while (i < arraye.length) {
        if (operatorArray.includes(arraye[i]) === false) {
          b = "" + b + arraye[i];
          i++
        }
        else
          break;

      }
      //console.log(a)
      //console.log(b)
      //console.log(parseInt(a) +parseInt(b));
    
    var result;
    switch (operator) {
      case '+': result = parseInt(a, 10) + parseInt(b, 10); break;
      case '-': console.log("minus"); result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = a / b; break;
      default: break;

    }
  
    
   
    this.setState({
      result: result,
      data: '',
      array: [result],
      count: 0

    })
  }
  else{
    this.setState({
      result:'',
      data: '',
      array: [],
      count: 0

    })

  }
  }




  render() {
    return (
      <div className="calculator-container">
        <div className="calculator__display">
          {this.state.array}
          <Result class="resultClass" result={this.state.result} />
        </div>
        <div className="calculator__buttons">
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '*', '-', '/'].map((val) =>
              <Bu value={val} onclick={this.handleClick} id={val} />
            )
          }
          <Bu value="=" onclick={this.evaluate} />

        </div>

      </div>
    );
  }
}

export default App;
