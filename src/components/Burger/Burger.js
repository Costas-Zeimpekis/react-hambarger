import React from 'react';
import PropTypes from 'prop-types';

import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let ingredientsTransformed = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])]
      .map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
  });

  if (ingredientsTransformed === 0) {
    ingredientsTransformed = <p>Please Start adding Ingredients</p>;
  }
  console.log(ingredientsTransformed);

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {ingredientsTransformed}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.object
};
export default burger;
