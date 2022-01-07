import React from "react";

class ActionLink extends React.Component {
    handleClick = (e) =>{
        // e.prevenDefault();
        console.log("you have just clicked");
    }
    render(){
        return(
            <a href="abc.html" onClick={this.handleClick}> Click Here</a>
        );
    }
}
export default ActionLink;