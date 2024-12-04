import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Cho phép tùy chỉnh style qua class
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
