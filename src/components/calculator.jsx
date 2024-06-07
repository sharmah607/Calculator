import React from 'react';
import Output from './output';
import Button from './button';
import { Component } from 'react';
import './calculator.css'

class Calculator extends Component {

    constructor(props) {
      super(props);
      this.state = {
        Output: "0",
      }
      this.handleclicks = this.handleclicks.bind(this);
    }
  
    handleclicks = (value) => {
      switch (value) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
        case '+':
        case '-':
        case '/':
        case '*':
          if (this.state.Output === "0") {
            this.setState({
              Output: value
            });
  
          } else {
            this.setState({
              Output: this.state.Output + value
            });
          }
          break;
        case '=':
          console.log(this.state.Output);
          this.setState({
            Output: eval(this.state.Output)
          })
          break;
        case 'c':
          this.setState({
            Output: ''
          })
          break;
        case '+/-':
          this.setState({
            Output: parseInt(this.state.Output, 10) * -1
          });
          break;
        case '%':
          this.setState({
            Output: parseFloat(this.state.Output, 10) / 100
          });
          break;
        default:
          break;
      }
  
    }
  
    render() {
      return ( <
        div className = "calc" >
        <
        Output Output = {
          this.state.Output
        }
        /> 
        <Button Buttonclicked = {
          this.handleclicks
        }
        /> 
        </div>
      );
    }
  }
  
  export default Calculator;