import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: [],
            quotes: ["red", "yellow", "blue", "green", "purple", "pink"]
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState(this.handleColor());
        }, 50);


    }
    handleColor = () => {
        this.setState({ color: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)] })
        console.log(this.setState);
    }
    render() {
        return (
            <div>
                <div
                    style={{
                        backgroundColor: this.state.color,
                        paddingTop: 50,
                        width: 400,
                        height: 400,
                        borderRadius: 50,
                        margin: 'auto'
                        
                    }}
                />
                <button  className="btn w-100 btn-outline-success" onClick={this.handleColor}>CLICK</button>
            </div>
        );
    }
}
export default App;