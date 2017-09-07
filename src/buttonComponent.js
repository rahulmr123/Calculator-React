import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class buttonComponent extends Component{

render(){
 
    return <Button onClick ={this.props.onclick} data-id={this.props.id} value={this.props.value}>{this.props.value}</Button>
  
}






}
export default buttonComponent