import React from "react";

const Input = ({ name, value, label, type, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        type={type}
        className="form-control"
      ></input>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
