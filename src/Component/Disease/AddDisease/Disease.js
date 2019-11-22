import React, { Component } from 'react';
import './Disease.css'
class LogIn extends Component {
  constructor() {
    super();
    this.state = {
        name:'',
        color:'#78fa21',
        description:'',
        percentage:'',
        data:'',
        result:''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePercentageChange = this.handlePercentageChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    
    // if (!this.state.username) {
    //         this.setState({ input1:'red' })
    //   return this.setState({ error: 'Username is required' });
    // }
    
    // if (!this.state.password) {
    //     this.setState({ input2:'red' })
    //     return this.setState({ error: 'Password is required' });
   
    //   }

      const data={
        diseaseId:2,
        name:this.state.name,
        color:this.state.color,
        description:this.state.description,
        percentage:this.state.percentage
      }
      console.log(data);
      console.log( fetch('http://localhost:8080/medlife/addDisease', {
        method: 'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(data),

      }).then(res => res.text()).then(res => this.setState({ result: res })));
      this.setState({
        name:'',
        color:'#78fa21',
        description:'',
        percentage:'',
        data:'',
        result:''
      });
      alert("Successfully Disease added.");
    return this.setState({ error: '' });
  }

  handleNameChange(evt) {
    this.setState({
      name: evt.target.value,
    });
  };

  handleColorChange(evt) {
    this.setState({
      color: evt.target.value,
    });
  }

  handleDescriptionChange(evt) {
    this.setState({
      description: evt.target.value,
    });
  };

  handlePercentageChange(evt) {
    this.setState({
      percentage: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
        <div className="Login">
        <form onSubmit={this.handleSubmit} className={this.state.form}>
          <h3 className="text-center">Add Disease</h3>
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
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" style={{borderColor:this.state.input1}}id="name"  placeholder="Disease Name"  value={this.state.name} onChange={this.handleNameChange} name="name"></input>
            </div>
            <div className="form-group">
                <label htmlFor="color">color</label>
                <input type="color" className="form-control " style={{borderColor:this.state.input2}} id="color"  value={this.state.color} onChange={this.handleColorChange} name="color"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="percentage">Percentage</label>
                <input type="text" className="form-control " style={{borderColor:this.state.input2}} id="percentage" placeholder="Percentage" value={this.state.percentage} onChange={this.handlePercentageChange} name="percentage"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control " style={{borderColor:this.state.input2}} id="description" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange} name="description"/>
            </div>
            
            <div className="button-div">
            <button type="submit"  className="btn btn-success px-5">Add Disease</button>
            </div>
            
      
            </form>
            
      
  
    </div>
    );
  }
}

export default LogIn;
