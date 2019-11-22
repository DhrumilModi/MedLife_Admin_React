import React, { Component } from 'react';
import './ManageDisease.css'
import { faTimes, faCogs, faTrash } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ManageDisease extends Component {
  constructor() {
    super();
    this.state = {
        disease:'',
        diseaseData:'',
        value:1,
        data:[],
        data1:[],   
    };
    this.handleChange = this.handleChange.bind(this);
    this.getDisease = this.getDisease.bind(this);
    this.deleteDisease=this.deleteDisease.bind(this);
}
  getDisease(id)
  {
    var path='https://powerful-beyond-11921.herokuapp.com/medlife/view-subdisease-by-disease/';
    path+=id;
   fetch(path).then(res => res.json()).then(res => {
    var dataItems=[];  
    res.map(
        item=>{
            dataItems.push(
              <tr key={item.subDiseaseId}>
                    <th scope="row">{item.subDiseaseId}</th>
                    <td>{item.name}</td>
                    <td>{item.discription}</td>
                    <td><button className="b1"><FontAwesomeIcon icon={faCogs}/></button></td> 
                    <td><button className="b2" onClick={(e) => this.deleteDisease(e,item.subDiseaseId)} id={item.disease["diseaseId"]}><FontAwesomeIcon icon={faTrash}/></button></td>
              </tr>
            );
        }
      );
      this.setState({ data1: dataItems })
      
    });

  }
  handleChange(e) {
      e.preventDefault();
    this.setState({
     value:e.target.value
    });
   console.log(e.target.value+"changed...");
    this.getDisease(e.target.value);
}

  componentDidMount() {
    
    fetch('https://powerful-beyond-11921.herokuapp.com/medlife/view-all-disease'
      ).then(res => res.json()).then(res => {
        var dataItems=[];  
        res.map(
            item=>{
                dataItems.push(<option key={item.diseaseId} value={item.diseaseId}>{item.name}</option>);
            }
          );
          this.setState({ data: dataItems })
          this.getDisease(this.state.value);
        });
  }

  deleteDisease(e,subDiseaseId)
  {
        
            var path='https://powerful-beyond-11921.herokuapp.com/medlife/deleteSubDisease/'+subDiseaseId;
            this.getDisease(this.state.value);
            console.log(e.target.id+" "+subDiseaseId);
            console.log("deleted...");

        }
  render() { 

    return (
        <div className="container">
           <h1>Manage Disease</h1>
        {/* <form onSubmit={this.handleSubmit} className={this.state.form}> */}
            <label>Disease
            <select value={this.state.value} onChange={this.handleChange}>
             {this.state.data} 
            </select>
            </label>
            <table className="table table-hover text-center">
    <thead>
    <tr>
      <th scope="col">diseaseId</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Update</th> 
      <th scope="col">Delete</th>
    </tr>
   </thead>
    <tbody>
    {this.state.data1}
    </tbody>
    </table>
    

        {/* </form> */}
            
      
  
    </div>
    );
  }
}

export default ManageDisease;
