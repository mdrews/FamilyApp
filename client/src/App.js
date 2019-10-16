import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import AppHeader from './components/AppHeader';
import ShoppingList from './components/ShoppingList';
import { addItem } from './actions/shoppingListActions';
import { shoppingListReducer } from './reducers/shoppingListReducer';

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

const store = createStore(shoppingListReducer);
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
