import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import ShoppingList from './components/ShoppingList';

function App(props) {
  return (
    <div className="App">
      <AppHeader />
      <ShoppingList {...props} />
    </div>
  );
}
export default App;
