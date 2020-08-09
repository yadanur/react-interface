import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';//import AddAppointments class from the AddAppointments.js file
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

class App extends Component {
  
  constructor(){
    super(); //super lets you use this statement
    this.state={
      myName:"Yusuf"
    }
  }
  
  render(){
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              {this.state.myName}
              <AddAppointments />
              <SearchAppointments />
              <ListAppointments />
            </div>
          </div>
        </div>
      </div>
      </main>
    );
  }
}

export default App;
//test comment 4