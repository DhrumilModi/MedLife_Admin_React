import React, { Component } from 'react';
import './LogIn.css';
import Home from '../Home/Home'
import logo1 from '../../assets/logo1.png'
class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      form:'rounded p-5 ',
      input1:'',
      input2:'',  
      data:'',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ input1:'',input2:'' })
    
    if (!this.state.username) {
            this.setState({ input1:'red' })
      return this.setState({ error: 'Username is required' });
    }
    
    if (!this.state.password) {
        this.setState({ input2:'red' })
        return this.setState({ error: 'Password is required' });
   
      }

      const data = new FormData(event.target);
      const data1={
        email:this.state.username,
        password:this.state.password
      }
      console.log(data1);
     console.log( fetch('https://powerful-beyond-11921.herokuapp.com/medlife/LogIn', {
        method: 'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(data1),

      }).then(res => res.json()).then(res => this.setState({ data: res })));
    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
      if(evt.target.value==='')
      {
          
      }
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div>
      {!this.state.data ? (
        <div className="Login">
        <div className="img1">
                <img src={logo1} className="img2" alt="medlife"/>
            
        </div>
    <form onSubmit={this.handleSubmit} className={this.state.form}>
    {
        this.state.error &&
        <h3 data-test="error" onClick={this.dismissError} className="error">
         <table > 
             <tr className="p-3 my-3">
                 <td><button onClick={this.dismissError} className="border border-light btn btn-dark text-danger rounded-circle">✖</button>
                </td>
                <td>{this.state.error}</td>
             </tr>
             </table>
        </h3>
        }
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" style={{borderColor:this.state.input1}}id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  value={this.state.username} onChange={this.handleUserChange} name="email"></input>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control " style={{borderColor:this.state.input2}} id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handlePassChange} name="password"/>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label " for="exampleCheck1">Check me out</label>
        </div>
        <div className="button-div">
        <button type="submit"  class="btn btn-success px-5">Log In</button>
        </div>
        
   
        </form>
        
   
  </div>
  
      ) : (
        <Home />
      )}
    </div>
    );
  }
}

export default LogIn;