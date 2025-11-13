import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ type = 'text', ...props }: InputProps) => {
  return (
    <div className='form-group'>
      <label></label>
      <input type={type} {...props} className='form-control' />
    </div>
  );
};

export default Input;
