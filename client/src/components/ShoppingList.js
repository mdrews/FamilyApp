import React, { useState } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

const ShoppingList = () => {
  
  const [ items, setItems ] = useState([
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Water' },
  ]);

  console.log(items);
  return(<Container>
    <Button 
      color="dark"
      onClick={() => {
        const name = prompt("Add an Item");
        if(name) { setItems([...items, { id: uuid(), name }])}
      }}>
      
      Add Item</Button>
  </Container>);
}

export default ShoppingList;