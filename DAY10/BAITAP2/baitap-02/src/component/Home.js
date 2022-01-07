import React from 'react';

class Home extends React.Component {
    componentWillUnmount(){
        alert('Goodbey!!!')
    }
    render(){
        return(
            <div style={{textAlign:'center'}}>
                    <form className='form-signin'>
                        <h1 className='h3 mb-3 fw-normal'>Welecom!</h1>
                        <button className='w-100 btn btn-lg btn-primary' type='button' onClick={this.props.onLogOut}>Log out</button>

                    </form>

            </div>
        )
    }

}
export default Home;