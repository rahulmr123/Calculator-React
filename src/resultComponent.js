import React, { Component } from 'react';
class resultComponent extends Component{

 constructor(props){
   super(props)
 }


  render(){
    
       return <div className ={this.props.class}>{this.props.result}</div>
     
   }



}
export default resultComponent 