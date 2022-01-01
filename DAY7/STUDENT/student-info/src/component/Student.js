import React from "react";
import { render } from "react-dom";

class Student extends React.Component {

    constructor(){
        super();
        this.obj = {
            students: [
                {
                    id:1,name:'Nguyen Van A',age:30, address: 'Than Xuan, Ha Noi'
                },
                {
                    id:2,name:'Nguyen Van B',age:30, address: 'Than Xuan, Ha Noi'
                },
                {
                    id:3,name:'Nguyen Van C',age:30, address: 'Than Xuan, Ha Noi'
                }
            ]
        }
    }

render(){

    return (

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                </tr>
            </thead>
            <tbody>
                    {this.obj.students.map((student, index) => {
                        return (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        );
                    })}
                </tbody>
        </table>
    );
}
}
export default Student;