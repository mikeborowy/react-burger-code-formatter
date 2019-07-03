import React from 'react';
import styles from './order.scss';

export const Order = (props) => {
  const renderIngredients = () => {
    const ingredients = [];

    for (const ingredientName in props.ingredients) {
      ingredients.push({
        name: ingredientName,
        amount: props.ingredients[ingredientName],
      });
    }

    return ingredients.map((ing) => {
      const style = {
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px',
      };

      const props = {
        style,
        key: ing.name,
      };

      return (
        <span {...props}>
          {ing.name}
          {' '}
          {ing.amount}
        </span>
      );
    });
  };

  const {
    totalPrice,
  } = props;

  return (
    <div className={styles.order}>
      <p>
    Ingredients:
        {renderIngredients()}
      </p>
      <p>
        Price:
        {' '}
        <strong>
          USD
          {Number.parseFloat(totalPrice)
          .toFixed(2)}
        </strong>
      </p>
    </div>
  );
};
