import React from 'react';

function Button({ type, bg, children, ...rest }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`button ${bg} === 'primary' ? 'primary' : 'secondary'`}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select id={id} className={'button button__select'} {...rest}>
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
