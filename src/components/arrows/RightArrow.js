import React from 'react';
import PropTypes from 'prop-types';
import './arrows.scss';

function RightArrow(props) {
  const { className, to, onClick } = props;

  return (
    <button type="button" onClick={onClick} className={`button-right ${className}`} aria-label={to}>click</button>
  );
}

RightArrow.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RightArrow;