import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';//import AddAppointments class from the AddAppointments.js file
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';
import { result } from 'lodash';
import {without} from 'lodash'

class App extends Component {
  
  constructor(){
    super(); //super lets you use this statement
    this.state={
      myAppointments: [],
      formDisplay:false,
      lastIndex:0
    }
    this.deleteAppointment=this.deleteAppointment.bind(this);
  }

  deleteAppointment(apt){
    let temporaryApts = this.state.myAppointments;
    temporaryApts = without (temporaryApts, apt);

    this.setState({
      myAppointments:temporaryApts
    });

  }
  //using fetch in a lifecycle method
  componentDidMount(){
    fetch('./data.json')
    .then (response => response.json())
    .then (result => {
      const apts = result.map (item => {
        item.aptId=this.state.lastIndex;
        this.setState({lastIndex:this.state.lastIndex+1});
        return item;
      })
      this.setState({
        myAppointments:apts
      });

    });

  }
  
  render(){
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments formDisplay={this.state.formDisplay} />
              <SearchAppointments />
              <ListAppointments appointments={this.state.myAppointments}
              deleteAppointment={this.deleteAppointment}/>
            </div>
          </div>
        </div>
      </div>
      </main>
    );
  }
}



export default App;
