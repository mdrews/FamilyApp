import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import ShoppingList from './components/ShoppingList';
import { addItem } from './actions/shoppingListActions';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <ShoppingList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    shoppingList: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem(item));
    }
  }
}

export default App;
