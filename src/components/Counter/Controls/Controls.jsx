import React from 'react';

export const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button type="button" onClick={onIncrement}>
        Увеличить на 1
      </button>
      <button type="button" onClick={onDecrement}>
        Уменьшить на 1
      </button>
    </div>
  );
};
