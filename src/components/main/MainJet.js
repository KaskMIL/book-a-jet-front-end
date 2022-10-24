import React from 'react';
import PropTypes from 'prop-types';

// Style
import './mainJet.scss';

// Icons
import * as FaIcons from 'react-icons/fa';

function MainJet(props) {
  const { name, description, key } = props;
  return (
    <article key={key} className="jet-container">
      <div>
        <img src="https://via.placeholder.com/150x150" alt="Jet" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <FaIcons.FaFacebookF />
        </div>
        <div>
          <FaIcons.FaTwitter />
        </div>
        <div>
          <FaIcons.FaInstagramSquare />
        </div>
      </div>
    </article>
  );
}

MainJet.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default MainJet;
