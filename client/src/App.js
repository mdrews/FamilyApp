import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <ShoppingList />
    </div>
  );
}

export default App;
