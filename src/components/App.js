import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';//import AddAppointments class from the AddAppointments.js file
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';
import { result } from 'lodash';

class App extends Component {
  
  constructor(){
    super(); //super lets you use this statement
    this.state={
      myAppointments: []
    }
  }
  //using fetch in a lifecycle method
  componentDidMount(){
    fetch('./data.json')
    .then (response => response.json())
    .then (result => {
      const apts = result.map (item => {
        return item;
      })
      this.setState({
        myAppointments:apts
      });

    });

  }
  
  render(){
    const listItems=this.state.myAppointments.map(item => 
    <div>
      <div>{item.petName}</div>
      <div>{item.ownerName}</div>
    </div>);
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              {listItems}
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
