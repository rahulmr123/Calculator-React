import React, { Component } from 'react';

class buttonComponent extends Component {

    

    render() {

        return (
            
            <div>
                {
         [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '*', '-', '/'].map( (val) => (
                <button value={val} onClick={() => {this.props.fun(val)}}>{val}</button>
      ))}
      <button value="=" onClick={() => {this.props.calc("=")}}>=</button>

         </div>
         );
    
    }

}

export default buttonComponent