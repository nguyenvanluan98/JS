import React from "react";
import Home from "./Home";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                email: '',
                password: '',
                isRemember: false
            },
            isValid: false,
            isLoggedln: false

        };
    }
    handleChange = (e) => {
        this.setState((state) => {
            const { form } = state
            form[e.target.name] = e.target.value
            return { form }
        }, () => this.checkValidForm())
    }



    checkValidForm = () => {
        // let returnData = {
        //     error: false,
        //     msg: ''
        // }
        // const re = /\S+@\S+\.\S+/;
        // if (!re.test(email)) {
        //     returnData = {
        //         error: true,
        //         msg: 'Không đúng định dạng email'
        //     }
        //     //Kiểm tra password
        //     if (password.length < 8) {
        //         returnData = {
        //             error: true,
        //             msg: 'Mật khẩu phải lớn hơn 8 ký tự'
        //         }
        //     }
        //     return returnData;
        // }
        const { email, password } = this.state.form
        const value = email && password
        this.setState({ isValid: value })
    }

handleSubmit = (e) => {
    // const validation = this.checkValidForm()
    // if (validation.error) {
    //     alert(validation.msg)
    //   }else{
    //     alert('Submit form success')
    //   }
    e.preventDefault()
    if (this.state.isValid) {
        this.setState({ isLoggedln: true })
        alert('Login success!!!')
    }

}

handleLogout = () => {
    this.setState({ isLoggedln: false })

}
render() {
    const { isLoggedln, form } = this.state
    if (isLoggedln) return (<Home onLogOut={this.handleLogout} />)
    return (
        <div className="container d-flex align-items-center text-center">
            <div className="form-signin">
                <form action="#">
                    <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={this.handleChange} />
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={this.handleChange} />
                        <label>Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.handleSubmit} >Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                </form>

            </div>

        </div>

    )


}
}

export default App;