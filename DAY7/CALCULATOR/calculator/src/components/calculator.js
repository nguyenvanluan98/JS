import React from "react";
import Button from "./button";
import Input from "./input";

class Calculator extends React.Component {
    // class constructor
    constructor() {
        super();
        // state se duoc hoc o bai sau
        this.state = { firstNumber: 0, secondNumber: 0, operator: null, displayValue: '' };
    };
    // ham tinh toan
    calculate = (operator) => {
        switch (operator) {
            case "+": this.setState({ displayValue: parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber) }); break;
            case "-": this.setState({ displayValue: parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber) }); break;
            case "*": this.setState({ displayValue: parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber) }); break;
            case "/": this.setState({ displayValue: parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber) }); break;
            default: this.setState({ displayValue: "Invalid input" }); break;
        }
    }
    // render
    render() {
        return (
            <div className="Calculator container pt-4">
                <Input type="number" onChange={(e) => { this.setState({ firstNumber: e.target.value }) }} placeholder="Enter the first number" />
                <br /><br />
                <Input type="number" onChange={(e) => { this.setState({ secondNumber: e.target.value }) }} placeholder="Enter the second number" />
                <h3>Result: {this.state.displayValue}</h3>
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("+") }} label='+'></Button>
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("-") }} label='-'></Button>
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("*") }} label='*'></Button>
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("/") }} label='/'></Button>
            </div>
        )
    }
}

export default Calculator;