import React, {Component} from 'react';
import './styles.css'

class Line extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="line">
                {this.props.children}
            </div>
        )}
}


export default Line;