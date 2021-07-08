import React, { Component } from 'react';

export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            coinA_value: "",
            coinB_value: 0
        }
    }

    converter() {
        
    }

    render() {
        return(
            <div className="Converter">
                <h2>{this.props.coinA} to {this.props.coinB}</h2>
                <input type="text" onChange={(event)=>{this.setState({coinA_value:event.target.value})}}></input>
                <input type="button" value="Convert" onClick={this.converter}></input>
                <h2>converted value</h2>
            </div>
        )
    }
}