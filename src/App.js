import React from 'react';
import './App.css';
import data from './data.json'
import FilteredProductComponent from './components/FilteredProductComponent'

class App extends React.Component {
  state = {
    products: data
  }

  render(){
   return (
    <div className="App">
      <FilteredProductComponent products={this.state.products}/>
    </div>
  );
   }
}

export default App;
