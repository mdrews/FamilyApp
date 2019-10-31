import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addItem, removeItem, getItems } from './actions/shoppingListActions';
import { shoppingListReducer } from './reducers/shoppingListReducer';

const mapStateToProps = state => {
  console.log("===STATE===");
  console.log(state);
  return {
    shoppingList: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: name => {
      dispatch(addItem(name));
    },
    removeItem: id => {
      dispatch(removeItem(id));
    },
    getItems: () => {
      dispatch(getItems());
    }
  }
}

const initialState = { loading: false, items: [] };

const middleware = [thunk];

const store = createStore(
  shoppingListReducer, 
  initialState,
  compose(
    applyMiddleware(...middleware)
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
