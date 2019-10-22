import React, { useState } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

const ShoppingList = props => {
  
  console.log(props);
  return(<Container>
    <Button 
      color="dark"
      style={{marginBottom: "2rem"}}
      onClick={() => {
        const name = prompt("Add an Item");
        if(name) props.addItem(name)
      }}>
      Add Item</Button>
    <ListGroup>
      <TransitionGroup>
        {props.shoppingList && props.shoppingList.map(item => {
          return(
          <CSSTransition key={item.id} classNames="fade" timeout={500} >
            <ListGroupItem>
              <Button color="danger"
                className="remove-btn"
                onClick={() => props.removeItem(item.id)}>
                &times;
              </Button>{item.name}</ListGroupItem>
          </CSSTransition>)
        })}
      </TransitionGroup>
    </ListGroup>
  </Container>);
}

export default ShoppingList;