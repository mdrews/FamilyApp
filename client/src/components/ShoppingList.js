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

  return(<Container>
    <Button 
      color="dark"
      style={{marginBottom: "2rem"}}
      onClick={() => {
        const name = prompt("Add an Item");
        if(name) { setItems([...items, { id: uuid(), name }])}
      }}>
      Add Item</Button>
    <ListGroup>
      <TransitionGroup>
        {items.map(item => {
          return(
          <CSSTransition>
            <ListGroupItem>
              <Button color="danger"
                onClick={() => setItems([...items.filter(i => i.id !== item.id)])}>
                &times;
              </Button>{item.name}</ListGroupItem>
          </CSSTransition>)
        })}
      </TransitionGroup>
    </ListGroup>
  </Container>);
}

export default ShoppingList;