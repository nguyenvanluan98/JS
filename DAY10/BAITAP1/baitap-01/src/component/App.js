import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keypressed: ''
        };
    }

    handler = (e) => {
        this.setState({ keypressed: e.key });
    };

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>Key pressed is: {this.state.keypressed}</p>
                <input type="text" onKeyPress={(e) => this.handler(e)} />
            </div>
        )
    }
}
export default App;


