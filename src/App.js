import React, {Component} from 'react';

import { CardList } from './compenents/card-list/card-list.component';

import { SerachBox } from './compenents/search-box/search-box.component';

import './App.css';

class App extends Component{
constructor(){
super();
this.state ={
  monsters:[],
  searchField: ''

};

 this.handleChange = this.handleChange.bind(this);
}


// this is the code for creating ApI and fecthing the data from the then API and displaying the username of the 
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters : users}));
}

handleChange = (e) => {
  this.setState({ searchField: e.target.value});
}


  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
      <div className="App">
      <SerachBox 
        placeholder='search monsters'
        handleChange= {this.handleChange}
      />
      <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
