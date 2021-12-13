import React from 'react';
import StyledHeader from './style';

function Header() {
  return (
    <StyledHeader>
      <div>
        <img
          src='https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png'
          alt='Wild Code School logo'
        />
        <h1> Les Argonautes </h1>
      </div>
    </StyledHeader>
  );
}

export default Header;
