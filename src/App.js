import React, { Component } from 'react'
import Todoinput from './components/Todoinput';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  state={
    item1:[],
    item2:[],
    item3:[]
  }

  manageState(data){
    this.setState({
      data
    })
  }

  changeState(data){
  
  }

  render() {  
   return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-autho col-md-4 mt-4">
            <h3 className="text-capitalize text-center">Enter Item</h3>
              <Todoinput keyName="todo" changeState={this.changeState} manageState={this.manageState}/>
            </div>
            <div className="col-10 mx-autho col-md-4 mt-4">
            <h3 className="text-capitalize text-center">Doing</h3>
              <Todoinput keyName="doing" changeState={this.changeState} manageState={this.manageState}/>
            </div>
            <div className="col-10 mx-autho col-md-4 mt-4">
            <h3 className="text-capitalize text-center">Done</h3>
              <Todoinput keyName="completed" changeState={this.changeState} manageState={this.manageState}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
