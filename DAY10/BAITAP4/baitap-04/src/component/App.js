import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: [],
            form: { name: "", phone: "", email: "" },
            isValid: false,
            indexSelected: -1
        }
    }
    handleChange = (e) => {
        this.setState((state) => {
            const form = state.form
            form[e.target.name] = e.target.value

            return { form }
        }, () => this.checkInvalidForm()

        )

    }

    handleSelect = (studentSelected, index) => {
        this.setState(
            {
                form: JSON.parse(JSON.stringify(studentSelected)),
                indexSelected: index
            }
        )
    }

    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form
        const value = name && phone && email
        this.setState({
            isValid: value
        })

    }


    handleSubmit = () => {
        if (this.state.isValid) {
            const newList = this.state.studentList
            if (this.state.indexSelected > -1) {
                newList.splice(this.state.indexSelected, 1, this.state.form)
            } else {
                newList.push(this.state.form)
            }
            const newForm = {
                name: "",
                phone: "",
                email: ""
            }
            this.setState({ studentList: newList, form: newForm, isValid: false, indexSelected: -1 })
        }
        alert('Thêm mới thành công!')
    }

    handleDelete = (index) => {
        const newList = this.state.studentList
        newList.splice(index, 1)
        this.setState({ list: newList })
        alert('Xóa Thành Công!')
    }

    render() {
        const { studentList, form } = this.state
        return (
            <div>
                <div>
                    <div class="row  justify-content-center">
                        <h1 style={{textAlign:'center'}}>Student List</h1>
                        <div class="form-group">
                            <label>Name: </label>
                            <input class="form-control" placeholder="Enter Name" name="name" value={form.name} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label>Phone: </label>
                            <input class="form-control" placeholder="Enter Phone Number" type="number" name="phone" value={form.phone} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email: </label>
                            <input class="form-control" placeholder="Enter email" name="email" value={form.email} onChange={this.handleChange} />
                        </div>
                        <button class="btn btn-primary mb-5 mt-5 col-lg-4 col-lg-offset-4" onClick={this.handleSubmit}>Submit</button>
                    </div>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentList.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <button class="btn btn-success"  onClick={this.handleSelect.bind(this, student, index)}>Edit</button> |                                
                                        <button class="btn btn-danger" onClick={this.handleDelete.bind(this, index)}>Delete</button>                                               
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default App;