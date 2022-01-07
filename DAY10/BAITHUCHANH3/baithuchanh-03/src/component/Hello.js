import React from "react";

class Hello extends React.Component {
    componentWillMount() {
        setTimeout(()=>
        { alert('The component is going to be unmounted')}, 1000
        )
       
    }
    render() {
        return (
            <h1>Hello World !!!</h1>
        )

    }
}
export default Hello;