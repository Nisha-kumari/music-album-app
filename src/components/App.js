import React, { Component } from 'react';
import Header from './Header';
import data from '../Data.json';
import Container from './Container';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value: '',
      filterData: [],
    }
    this.updateList = this.updateList.bind(this);
  }
  updateList(e){
    this.setState({value: e.target.value,
      filterData: data.entry.filter(item => 
        item.artist.label === e.target.value
    ),
  })
  //  const filterData = data.entry.filter(item => 
  //    item.artist.label === e.target.value
     
  //   );
  //  console.log("filter",filterData);
  }
  render() {
    return (
      <div className="App">
         <Header updateList={evt =>this.updateList(evt)}  value={this.state.value}/>
         <Container filterData={this.state.filterData}/>
      </div>
    );
  }

}


export default App;

