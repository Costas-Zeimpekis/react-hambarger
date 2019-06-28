import React, { Fragment } from 'react';
import './OrderSummary.scss';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span className="OrderSummary-span">{igKey}</span> :
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3 className="OrderSummary">Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: {props.price.toFixed(2)}$</p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.onClickCancelPurchase}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.onClickPurchase}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default orderSummary;
