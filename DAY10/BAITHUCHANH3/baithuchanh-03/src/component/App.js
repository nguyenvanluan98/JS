import React from "react";
import Hello from "./Hello";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.hadleReset = this.hadleReset.bind(this);
    }
    delete = () => {
        this.setState({ display: false });
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value });

    }

    hadleReset = () => {
        let setState=
        this.setState(this.value);
        console.log(setState);
    }
    render() {
        let comp;
        if (this.state.display) {
            comp = <Hello />
        }

        return (
            <div style={{ textAlign: 'center' }}>
                {comp}
                <button onClick={this.delete}>Delete Component</button>
                <hr />
                <form onSubmit={this.hadleReset}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <button type="submit" value="submit" >Reset Component</button>
                </form>

            </div>
        )
    }
}

export default App;