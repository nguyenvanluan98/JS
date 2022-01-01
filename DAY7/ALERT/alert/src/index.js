import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


 const Alert = (props) =>{
   return(
      <div className='alert alert-danger' role="alert">
      {props.text}
      </div>
         );
   }
  ReactDOM.render(
    <React.StrictMode>
      <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
    </React.StrictMode>,
    document.getElementById('root')
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
