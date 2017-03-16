import React from 'react';
import PizzaListItem from './PizzaListItem.jsx';

const List = (props) => (
  <div>
    <h4> Pizza List Component </h4>
    There are { props.pizzas.length } pizzas.
    <ul>{ props.pizzas.map(pizza => <PizzaListItem pizza={pizza}/>)} </ul>
  </div>
)

export default List;