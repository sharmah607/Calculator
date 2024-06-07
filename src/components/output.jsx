import React, {Component} from 'react';


class Output extends Component{
    render(){
        return(
        <div className="Output">
          <p>{this.props.Output}</p>
        </div>
        );
    }
}
export default Output;