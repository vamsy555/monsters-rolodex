import React,{ Component } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() { // life cycle method
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({monsters: users }));

  };
  render() {
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField} = this.state;// object destructuring
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      ); // includes is an array method checks whether given element is inside an array
    return (
      
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox
          
          placeholder = "Search Monsters"
          handleChange = {e => {
            this.setState({ searchField: e.target.value})}
          }
        />
        
        <CardList monsters = { filteredMonsters }/>
      </div>
    );
  }
}



export default App;
