import React, {Component} from 'react';
import './App.css';
import Bu from './buttonComponent';
import Result from './resultComponent';
import Input from './inputComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      result: '',
      array: [],
      count: 0,
      fun:this.callBack,
      calc:this.evaluate

    };

   // this.buttonClick = this.buttonClick.bind(this);
   this.callBack = this.callBack.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }

  callBack = function(dataFromButton){
    console.log("-----",dataFromButton);
    var c = this.state.count;
    this.setState({
      data:dataFromButton
    });
    let buttonValue = dataFromButton;
    if (['+', '-', '*', '/'].includes(buttonValue) === true) {
      this.setState({
        count: c + 1,
      });
    }

    if (this.state.count <= 1) {
      let tempArr = this.state.array;
      tempArr.push(buttonValue);

      this.setState({
        array: tempArr,
      });
    }


  }




  // buttonClick = function(event) {
  //   //console.log(event.target)
  //   // console.log(event.target.getAttribute("value"))
  //   var c = this.state.count;
  //   let buttonValue = event.target.getAttribute('value');
  //   if (['+', '-', '*', '/'].includes(buttonValue) === true) {
  //     this.setState({
  //       count: c + 1,
  //     });
  //   }

  //   if (this.state.count <= 1) {
  //     let tempArr = this.state.array;
  //     tempArr.push(buttonValue);

  //     this.setState({
  //       array: tempArr,
  //     });
  //   }
  // };
  evaluate = function(event) {
    var operatorArray = ['+', '-', '*', '/'];
    var tempArraye = this.state.array;

    var a = tempArraye[0];
    if (a !== '+' && tempArraye.length > 1) {
      var b;
      var i = 1;
      while (i < tempArraye.length) {
        if (operatorArray.includes(tempArraye[i]) === false) {
          a = '' + a + tempArraye[i];
          i++;
        } else break;
      }
      var operator = tempArraye[i];

      i++;
      b = tempArraye[i];
      i++;
      while (i < tempArraye.length) {
        if (operatorArray.includes(tempArraye[i]) === false) {
          b = '' + b + tempArraye[i];
          i++;
        } else break;
      }
      //console.log(a)
      //console.log(b)
      //console.log(parseInt(a) +parseInt(b));

      var result;
      switch (operator) {
        case '+':
          result = parseInt(a, 10) + parseInt(b, 10);
          break;
        case '-':
          console.log('minus');
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = a / b;
          break;
        default:
          break;
      }

      this.setState({
        result: result,
        data: '',
        array: [result],
        count: 0,
      });
    } else {
      this.setState({
        result: '',
        data: '',
        array: [],
        count: 0,
      });
    }
  };

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator__display">
          <Input InputArray = {this.state.array} />
          <Result class="resultClass" result={this.state.result} />
        </div>
        <div className="calculator__buttons">
        <Bu fun={this.callBack} calc={this.evaluate}/>
           
        </div>
      </div>
    );
  }
}

export default App;
