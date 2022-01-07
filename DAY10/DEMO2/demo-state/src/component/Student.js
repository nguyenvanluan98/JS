import React from "react";
class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Luan', age: 23, address: 'Đà Nẵng' }
    }
    render() {
        return (
            <div>
                {this.state.name} - {this.state.age}: {this.state.address}
                <hr/>
                <button onClick={this.modifyName}>Click</button>
                <button onClick={this.modifyReset}>Reset</button>
            </div>

        );
    }
    modifyName = ()=>{
        this.setState({name: 'Minh'})
    }
    modifyReset = ()=>{
        this.setState({name: ''})
    }
}
export default Student;