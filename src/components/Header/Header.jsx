import React from 'react';

import cn from 'classnames';

import headerStyle from './Header.module.scss';

const Header = () => {
  const buttonSIClasses = cn(headerStyle.button, headerStyle.buttonSI);
  const buttonSUClasses = cn(headerStyle.button, headerStyle.buttonSU);

  return (
    <div className={headerStyle.container}>
      <div className={headerStyle.titleContainer}>
        <p className={headerStyle.title}>Realworld Blog</p>
      </div>
      <div className={headerStyle.buttonsContainer}>
        <button type="button" className={buttonSIClasses}>
          Sign in
        </button>
        <button type="button" className={buttonSUClasses}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
