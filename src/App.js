import React, {Component} from 'react';

import { CardList } from './compenents/card-list/card-list.component';
import './App.css';

class App extends Component{
constructor(){
super();
this.state ={
  monsters:[],
  searchField: ''

};
}


// this is the code for creating ApI and fecthing the data from the then API and displaying the username of the 
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters : users}));
}



  render(){
    return (
      <div className="App">
      <input 
      type='search' 
      placeholder='search monsters'
      onChange={e => {
        this.setState({searchField : e.target.value }, () =>
      console.log(this.state)
      );
      }}/>
      <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
