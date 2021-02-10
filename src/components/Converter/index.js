import React, {Component} from "react";
import './styles.css'
class Converter extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            currencyA_value: "",
            currencyB_value: 0
        }

        this.valueConverter = this.valueConverter.bind(this);
    }

    valueConverter(){
        let requisition = `${this.props.currencyA}_${this.props.currencyB}`;
        let url = `https://economia.awesomeapi.com.br/json/USD-BRL`;
        fetch(url)
            .then(result => {
                return(result.json());
            })
            .then(json => {
                let cotacao = json[0]["high"];
                let currencyB_value = (parseFloat(this.state.currencyA_value) * cotacao).toFixed(2);
                console.log(currencyB_value)
                this.setState({currencyB_value});
            })
    }

    render() {
       return( <div className="converter">
            <h2>{this.props.currencyA} para {this.props.currencyB}</h2>
            <input type="text" className="text-converter" onChange={(event)=>{this.setState({currencyA_value: event.target.value})}}/>
            <input type="button" value="Converter" onClick={this.valueConverter} className="btn-converter"/>
            <footer className="footer-converter">
                <h2>{this.state.currencyB_value}</h2>
            </footer>
        </div>
       )};
}

export default Converter;