import React from 'react';

const PizzaListItem = (props) => (
  <li>
    <p> { props.pizza.quantity } </p>
    <p> { props.pizza.sauce } </p>
    <p> { props.pizza.topping1 } </p>
    <p> { props.pizza.topping2 } </p>
    <p> { props.pizza.topping3 } </p>
    <p> { props.pizza.price } </p>
  </li>
)

export default PizzaListItem;