import React, { useState, useEffect } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ShoppingList = props => {

  useEffect(() => {
    props && props.getItems();
  }, []);
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
        {props.shoppingList.item && props.shoppingList.item.map(item => {
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