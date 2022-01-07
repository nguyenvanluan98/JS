import React from "react";
import Home from "./Home";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedln: false }
    };


    handleLogIn = () => {
        setTimeout(() => this.setState({ isLoggedIn: true }), 2000);
        // toast.success("Login Success!");
        alert('Login Success!')
    }

    handleLogOut = () => {
        this.setState({ isLoggedIn: false })
        // toast.success("LogOut Success!");
        alert('LogOut Success!')
    }

    render() {

        const { isLoggedIn } = this.state
        if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
        return (

            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1>Please log In</h1>
                    <button onClick={this.handleLogIn}>LogIn</button>
                </div>
            </div>
            // <ToastContainer
            //         position="top-center"
            //         autoClose={5000}
            //         hideProgressBar={false}
            //         newestOnTop={false}
            //         closeOnClick
            //         rtl={false}
            //         pauseOnFocusLoss
            //         draggable
            //         pauseOnHover
            //     />


        );

    };
}


export default App;