
import React, { Component } from 'react';
import PropTypes from 'prop-types';




function Agestatement(props) {
    return <p class = "top">{props.age} years old</p>;
  }

export default Agestatement;


Agestatement.propTypes = {
    age: PropTypes.string
};

Agestatement.defaultProps = {
    age: 16
};
