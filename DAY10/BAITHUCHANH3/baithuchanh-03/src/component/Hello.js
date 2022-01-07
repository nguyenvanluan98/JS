import React from "react";

class Hello extends React.Component {
    componentWillMount() {
        setTimeout(()=>
        { alert('Hello moi nguoi !')}, 1000
        )
       
    }
    render() {
        return (
            <h1>Hello Word!</h1>
        )

    }
}
export default Hello;