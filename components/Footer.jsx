import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Q-Online-Shop All rights reserved</p>
      <p className="icons">
        <AiFillInstagram style={{cursor: 'pointer'}} />
        <AiOutlineTwitter style={{cursor: 'pointer'}} />
      </p>
    </div>
  )
}

export default Footer