import React from 'react';

// class App extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {msg:'hello'}
//     }
//     componentWillMount(){
//         console.log('willMount đã chạy');
//     }
//     componentDidMount(){
//         console.log('DidMount đã chạy');
//     }
//     changeMsg =()=>{
//         this.setState({msg:'say hi'})
//     }
//     render(){
//         console.log('render da chay');
//         return(
//             <div>
//                     <button onClick={this.changeMsg}>Bấm</button>
//                     {this.state.msg}
//             </div>

//         )
//     }
// }
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber() {
        this.setState({ data: this.state.data + 1 })
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}
class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
export default App;