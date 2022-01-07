import React from 'react';
// import {toast } from 'react-toastify';



class Home extends React.Component {
    render() {
        return (
                <div style={{ textAlign: 'center' }}>
                    <div>
                        <h1>Welecom</h1>
                        <button onClick={this.props.onLogOut}>LogOut</button>
                    </div>
                </div> 



        )
    }


}
export default Home;