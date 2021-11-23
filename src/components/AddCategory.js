import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handdleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handdleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((categ) => [inputValue, ...categ]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handdleSubmit}>
      <input type="text" placeholder="Search your gif here!" value={inputValue} onChange={handdleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
